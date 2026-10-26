#!/usr/bin/env python3
"""Regenerate the social-card canvas; stdlib only, no network or AI.

Only needed when changing the geometry. Normal builds use the checked-in PNG
and Hugo's native images.Text filters to typeset each page.
"""
from pathlib import Path
import struct
import zlib

WIDTH, HEIGHT = 1200, 630
pixels = bytearray(bytes.fromhex("0d151c") * WIDTH * HEIGHT)


def rectangle(x, y, width, height, color):
    for row in range(y, y + height):
        start = (row * WIDTH + x) * 3
        pixels[start:start + width * 3] = bytes.fromhex(color) * width


# Technical frame, an accent rail, and a quiet square-within-square motif.
rectangle(0, 0, WIDTH, 8, "6f91b2")
rectangle(64, 496, 1072, 1, "2a3845")
for x in range(64, 1137, 134):
    rectangle(x, 491, 1, 11, "4b647b")
rectangle(64, 58, 12, 12, "6f91b2")
rectangle(1080, 58, 56, 56, "293b4c")
rectangle(1082, 60, 52, 52, "0d151c")
rectangle(1096, 74, 24, 24, "6f91b2")


def chunk(kind, data):
    return struct.pack("!I", len(data)) + kind + data + struct.pack("!I", zlib.crc32(kind + data))


rows = b"".join(b"\0" + pixels[y * WIDTH * 3:(y + 1) * WIDTH * 3] for y in range(HEIGHT))
png = b"\x89PNG\r\n\x1a\n"
png += chunk(b"IHDR", struct.pack("!2I5B", WIDTH, HEIGHT, 8, 2, 0, 0, 0))
png += chunk(b"IDAT", zlib.compress(rows, 9)) + chunk(b"IEND", b"")
(Path(__file__).resolve().parents[1] / "assets/images/social-background.png").write_bytes(png)
