"""Build static responsive previews; never overwrite research originals.

Run with Python + Pillow after adding or replacing website photographs/figures.
Generated assets and manifest are committed, so deployment needs no image service.
"""
from pathlib import Path
from hashlib import sha256
import json
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
OUT = PUBLIC / "assets" / "previews"
OUT.mkdir(parents=True, exist_ok=True)
manifest = {}
for source in sorted(PUBLIC.rglob("*")):
    if not source.is_file() or OUT in source.parents:
        continue
    if source.suffix.lower() not in {".png", ".jpg", ".jpeg", ".webp"} or source.stat().st_size < 40000:
        continue
    with Image.open(source) as original:
        if getattr(original, "is_animated", False):
            continue
        image = ImageOps.exif_transpose(original).convert("RGBA" if "A" in original.getbands() else "RGB")
        width, height = image.size
        digest = sha256(source.read_bytes()).hexdigest()[:10]
        variants = []
        for size in sorted({min(width, value) for value in (480, 960, 1600, 2400)}):
            preview = image.resize((size, max(1, round(height * size / width))), Image.Resampling.LANCZOS)
            output = OUT / f"{source.stem}-{digest}-{size}.webp"
            preview.save(output, "WEBP", quality=88, method=6)
            variants.append({"src": "/" + output.relative_to(PUBLIC).as_posix(), "width": size, "bytes": output.stat().st_size})
        manifest["/" + source.relative_to(PUBLIC).as_posix()] = {"width": width, "height": height, "originalBytes": source.stat().st_size, "variants": variants}

(ROOT / "lib" / "image-previews.json").write_text(json.dumps(manifest, indent=2) + "\n", encoding="utf-8")
for src, item in manifest.items():
    preview = next((v for v in item["variants"] if v["width"] >= 960), item["variants"][-1])
    print(f'{src}: {item["originalBytes"]:,} -> {preview["bytes"]:,} bytes ({preview["width"]}px)')
