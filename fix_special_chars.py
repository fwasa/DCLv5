import os
import re

# Define replacements
replacements = {
    'º': '',  # Remove separator
    ''°': '',  # Remove icon
    '"‰': '',  # Remove icon
    '"œ': '',  # Remove icon
    '"ž': '',  # Remove icon
    '"Š': '',  # Remove icon
    '©': '(c)',  # Copyright
    '™': '',  # Trademark
    '€': '',  # Any other special chars
}

def fix_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original = content
        for old, new in replacements.items():
            content = content.replace(old, new)
        
        if content != original:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
    except:
        pass
    return False

# Process all JSX and JS files
count = 0
for root, dirs, files in os.walk('src'):
    for file in files:
        if file.endswith(('.jsx', '.js')):
            filepath = os.path.join(root, file)
            if fix_file(filepath):
                count += 1

print(f"✅ Fixed {count} files")
