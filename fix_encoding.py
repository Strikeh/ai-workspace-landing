import sys

# Read the file
with open('src/app/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace all encoding issues
replacements = {
    '©': '©',
    '—': '—',
    '"': '"',
    '"': '"',
    '→': '→',
    '♦': '♦',
    '✓': '✓',
    ''': ''',
    ''': ''',
    '…': '…',
    '€': '€',
    'ø': 'ø',
    'á': 'á',
    'í': 'í',
}

for bad, good in replacements.items():
    content = content.replace(bad, good)

# Write back
with open('src/app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed encoding issues!")
