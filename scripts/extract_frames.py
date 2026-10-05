import cv2
import os
from PIL import Image

VIDEO = "public/character.mp4"
OUTPUT = "public/frames"

os.makedirs(OUTPUT, exist_ok=True)

cap = cv2.VideoCapture(VIDEO)

total = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))

if total <= 0:
    raise RuntimeError("Could not read video.")

target_frames = [
    round(i * (total - 1) / 63)
    for i in range(64)
]

target_set = set(target_frames)
saved = 0
frame_number = 0

while True:
    success, frame = cap.read()

    if not success:
        break

    if frame_number in target_set:
        frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)

        image = Image.fromarray(frame)
        image.save(
            f"{OUTPUT}/frame-{saved:02d}.webp",
            "WEBP",
            quality=95
        )

        saved += 1

    frame_number += 1

cap.release()

# Center frame
cap = cv2.VideoCapture(VIDEO)
center_index = total // 2

cap.set(cv2.CAP_PROP_POS_FRAMES, center_index)
success, frame = cap.read()

if success:
    frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
    Image.fromarray(frame).save(
        "public/center.webp",
        "WEBP",
        quality=95
    )

cap.release()

print(f"✅ Created {saved} frames + center.webp")