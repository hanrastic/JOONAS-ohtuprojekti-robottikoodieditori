export function autoComplete_fi(customWords) {
    return (context) => {
        let word = context.matchBefore(/\w*/)
        if (word.from == word.to && !context.explicit)
            return null
        let options = [
            {label: "tulosta", type: "keyword"},
            {label: "eteen", type: "keyword"},
            {label: "et", type: "keyword"},
            {label: "taakse", type: "keyword"},
            {label: "ta", type: "keyword"},
            {label: "vasemmalle", type: "keyword"},
            {label: "va", type: "keyword"},
            {label: "oikealle", type: "keyword"},
            {label: "oi", type: "keyword"},
            {label: "jos", type: "keyword"},
            {label: "riippuen", type: "keyword"},
            {label: "olkoon", type: "keyword"},
            {label: "miten", type: "keyword"},
            {label: "valmis", type: "keyword"},
            {label: "toista", type: "keyword"},
            {label: "luvuille", type: "keyword"},
            {label: "anna", type: "keyword"},

        ]

        options = customWords.length > 0 ? options.concat(customWords) : options

        return {
            from: word.from,
            options
        }
    }
}
