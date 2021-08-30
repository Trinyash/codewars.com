#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import argparse
import enum
import pathlib
from urllib.parse import urlparse

import requests


@enum.unique
class Language(enum.Enum):
    Agda = enum.auto()
    BrainFuck = enum.auto()
    C = enum.auto()
    CFML = enum.auto()
    Clojure = enum.auto()
    Cobol = enum.auto()
    CoffeeScript = enum.auto()
    CommonLisp = enum.auto()
    Coq = enum.auto()
    Cpp = enum.auto()
    Crystal = enum.auto()
    CSharp = enum.auto()
    Dart = enum.auto()
    Elixir = enum.auto()
    Elm = enum.auto()
    Erlang = enum.auto()
    Factor = enum.auto()
    Forth = enum.auto()
    Fortran = enum.auto()
    FSharp = enum.auto()
    Go = enum.auto()
    Groovy = enum.auto()
    Haskell = enum.auto()
    Haxe = enum.auto()
    Idris = enum.auto()
    Java = enum.auto()
    JavaScript = enum.auto()
    Julia = enum.auto()
    Kotlin = enum.auto()
    Lean = enum.auto()
    Lua = enum.auto()
    NASM = enum.auto()
    Nim = enum.auto()
    ObjC = enum.auto()
    OCaml = enum.auto()
    Pascal = enum.auto()
    Perl = enum.auto()
    PHP = enum.auto()
    PowerShell = enum.auto()
    Prolog = enum.auto()
    PureScript = enum.auto()
    Python = enum.auto()
    R = enum.auto()
    Racket = enum.auto()
    Raku = enum.auto()
    Reason = enum.auto()
    Ruby = enum.auto()
    Rust = enum.auto()
    Scala = enum.auto()
    Shell = enum.auto()
    Solidity = enum.auto()
    SQL = enum.auto()
    Swift = enum.auto()
    TypeScript = enum.auto()
    VisualBasic = enum.auto()


language_str2Language = {
    'javascript': Language.JavaScript,
    'coffeescript': Language.CoffeeScript,
    'ruby': Language.Ruby,
    'python': Language.Python,
    'haskell': Language.Haskell,
    'clojure': Language.Clojure,
    'java': Language.Java,
    'csharp': Language.CSharp,
    'elixir': Language.Elixir,
    'cpp': Language.Cpp,
    'typescript': Language.TypeScript,
    'php': Language.PHP,
    'crystal': Language.Crystal,
    'dart': Language.Dart,
    'rust': Language.Rust,
    'fsharp': Language.FSharp,
    'swift': Language.Swift,
    'go': Language.Go,
    'shell': Language.Shell,
    'c': Language.C,
    'lua': Language.Lua,
    'sql': Language.SQL,
    'bf': Language.BrainFuck,
    'r': Language.R,
    'nim': Language.Nim,
    'erlang': Language.Erlang,
    'objc': Language.ObjC,
    'scala': Language.Scala,
    'kotlin': Language.Kotlin,
    'solidity': Language.Solidity,
    'groovy': Language.Groovy,
    'fortran': Language.Fortran,
    'nasm': Language.NASM,
    'julia': Language.Julia,
    'powershell': Language.PowerShell,
    'purescript': Language.PureScript,
    'elm': Language.Elm,
    'ocaml': Language.OCaml,
    'reason': Language.Reason,
    'idris': Language.Idris,
    'racket': Language.Racket,
    'agda': Language.Agda,
    'coq': Language.Coq,
    'vb': Language.VisualBasic,
    'forth': Language.Forth,
    'factor': Language.Factor,
    'prolog': Language.Prolog,
    'cfml': Language.CFML,
    'lean': Language.Lean,
    'cobol': Language.Cobol,
    'haxe': Language.Haxe,
    'commonlisp': Language.CommonLisp,
    'raku': Language.Raku,
    'perl': Language.Perl,
    'pascal': Language.Pascal,
}

language_str2language_pretty_str = {
    k: f'{v}'.split('.')[-1] for k, v in language_str2Language.items()
}


def language2file_ext(language: Language) -> str:
    assert isinstance(language, Language), f'{language=} type of "{type(language)}"'

    def not_implemented_language():
        raise NotImplementedError(f'{language=}')

    result = {
        Language.PHP: '.php',
        Language.Python: '.py',
        Language.JavaScript: '.js',
        Language.CoffeeScript: '.coffee',
        Language.Cpp: '.cpp',
        Language.TypeScript: '.ts'
    }.get(language, not_implemented_language)

    return result if isinstance(result, str) else result()


def file_template_based_by_language(language: Language) -> str:
    assert isinstance(language, Language), f'{language=} type of "{type(language)}"'

    def not_implemented_language():
        raise NotImplementedError(f'{language=}')

    result = {
        Language.Python: '#!/usr/bin/env python3\n'
                         '# -*- coding: utf-8 -*-\n'
                         '\n'
                         '# {text}\n'
                         '\n'
                         '# START HERE\n'
                         '\n',

        Language.PHP: '<?php\n'
                      '\n'
                      '// {text}\n'
                      '\n'
                      '// START HERE\n'
                      '\n',

        Language.CoffeeScript: '###\n'
                               '{text}\n'
                               '###\n'
                               '\n'
                               '# START HERE\n'
                               '\n',

        Language.Cpp: '/*\n'
                      '* {text}\n'
                      '*/\n'
                      '\n'
                      '// START HERE\n'
                      '\n',

        Language.JavaScript: '/*\n'
                             '* {text}\n'
                             '*/\n'
                             '\n'
                             '// START HERE\n'
                             '\n',

    }.get(language, not_implemented_language)

    return result if isinstance(result, str) else result()


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('url')
    args = parser.parse_args()

    url = args.url

    o = urlparse(url)
    assert o.netloc == 'www.codewars.com' or o.netloc == 'codewars.com', f'{o.netloc=}'
    path = [x for x in o.path.split('/') if x]

    challenge_id = path[1]
    assert len(challenge_id) == 24, f'{path=} {challenge_id=}'

    language_str = path[3]
    assert language_str in language_str2Language.keys(), f'{language_str=}'

    req = requests.get(f'https://www.codewars.com/api/v1/code-challenges/{challenge_id}')
    assert req.status_code == 200, f'{req.status_code=}'

    data = req.json()

    assert 'languages' in data, f'{data=}'
    assert language_str in data['languages'], f'{language_str=}'
    language = language_str2Language[language_str]

    assert 'rank' in data, f'{data=}'
    assert 'id' in data['rank'], f'{data["rank"]=}'
    assert isinstance(data['rank']['id'], int), f'{data["rank"]["id"]=} type of {type(data["rank"]["id"])}'
    rank = abs(data['rank']['id'])

    assert 'slug' in data, f'{data=}'
    slug = data['slug']

    path = pathlib.Path.cwd() / f'{language_str}' / f'kyu_{rank}'
    path.mkdir(exist_ok=True, parents=True)
    file_ext = language2file_ext(language)
    filename = path / f'{slug}{file_ext}'
    if filename.exists():
        raise FileExistsError(filename)
    with open(file=f'{filename}', mode='w', encoding='utf-8') as fh_out:
        fh_out.write(f'{file_template_based_by_language(language).format(text=url)}')
        fh_out.flush()

    with open(file='README.md', mode='r', encoding='utf-8') as fh_in:
        readme_data = fh_in.read().splitlines(keepends=False)

    assert 'name' in data, f'{data=}'
    name = data['name']
    assert 'url' in data, f'{data=}'
    url = data['url']

    readme_data = readme_data[:-1]
    readme_data.append(f'* ``{rank} kyu`` **{language_str2language_pretty_str[language_str]}** [{name}]({url})')
    readme_data.append('\n')

    with open(file='README.md', mode='w', encoding='utf-8') as fh_out:
        fh_out.write('\n'.join(readme_data))


if __name__ == '__main__':
    main()
