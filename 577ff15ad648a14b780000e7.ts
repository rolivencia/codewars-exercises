export function greet(language: string): string {

    const languages = [ ['english', 'Welcome']
        , ['czech', 'Vitejte']
        , ['danish', 'Velkomst']
        , ['dutch', 'Welkom']
        , ['estonian', 'Tere tulemast']
        , ['finnish', 'Tervetuloa']
        , ['flemish', 'Welgekomen']
        , ['french', 'Bienvenue']
        , ['german', 'Willkommen']
        , ['irish', 'Failte']
        , ['italian', 'Benvenuto']
        , ['latvian', 'Gaidits']
        , ['lithuanian', 'Laukiamas']
        , ['polish', 'Witamy']
        , ['spanish', 'Bienvenido']
        , ['swedish', 'Valkommen']
        , ['welsh', 'Croeso']
    ]

    const message = languages.filter(([entryKey, entryString]) => entryKey === language).map(([entryKey, entryString]) => entryString).pop();

    return message ?? 'Welcome'
}
