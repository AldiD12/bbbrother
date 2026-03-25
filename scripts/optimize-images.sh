#!/bin/bash

# Target directory
TARGET_DIR="public/images"
MAX_WIDTH=1200
QUALITY=70

echo "🚀 Starting image optimization in $TARGET_DIR..."

# Check if sips is available
if ! command -v sips &> /dev/null; then
    echo "❌ Error: sips command not found. This script requires macOS."
    exit 1
fi

# Create a temporary directory for processing
TEMP_DIR="public/images_optimized_temp"
mkdir -p "$TEMP_DIR"

# Process each webp file
for file in "$TARGET_DIR"/*.webp; do
    if [ -f "$file" ]; then
        filename=$(basename "$file")
        echo "Processing $filename..."
        
        # 1. Resize if width > MAX_WIDTH (keeping aspect ratio)
        # 2. Re-compress with target quality
        # We output to the temp dir first to avoid issues
        sips --resampleWidth "$MAX_WIDTH" --setProperty format webp --setProperty formatOptions "$QUALITY" "$file" --out "$TEMP_DIR/$filename" > /dev/null
    fi
done

# Move optimized files back to the target directory
echo "✅ Optimization complete. Replacing files..."
mv "$TEMP_DIR"/*.webp "$TARGET_DIR/"
rmdir "$TEMP_DIR"

echo "✨ All images in $TARGET_DIR have been optimized (Max Width: ${MAX_WIDTH}px, Quality: ${QUALITY}%)."
