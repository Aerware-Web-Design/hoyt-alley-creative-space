from pathlib import Path

for path in Path('build').rglob('*.html'):
    output = []

    with open(path) as file:
        for line in file:
            output.append(line)

            if '<!--include' in line:
                included_path = (line
                    .replace('<!--include', '')
                    .replace('-->', '')
                    .strip()
                )
                with open(f'build/include/{included_path}') as included_file:
                    output.append(included_file.read())

    with open(path, 'w') as file:
        for line in output:
            file.write(line)
