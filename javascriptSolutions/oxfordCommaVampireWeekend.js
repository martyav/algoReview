// From https://www.codewars.com/kata/format-a-string-of-names-like-bart-lisa-and-maggie/train/javascript

function list(names) {
    if (!Array.isArray(names)) {
        throw new TypeError("Argument needs to be an array");
    }

    if (names.length < 1) {
        return "";
    }
    
    if (typeof names[0] != "object") {
      throw new TypeError("Argument needs to be an array of objects");
    }

    if (names.length === 1) {
        let onlyIndividual = names[0];

        if (onlyIndividual.hasOwnProperty("name")) {
            return onlyIndividual.name;
        }
    }

    let returnString = "";

    for (let i = 0; i < names.length; i++) {
        let individual = names[i];
        let triggerForDifferentFormating = names.length - 2;
        let needsAmpersand = names.length - 2;

        if (individual.hasOwnProperty("name")) {
            let formattedName = individual.name;

            if (i < triggerForDifferentFormating) {
                formattedName += ", ";
            } else {
                if (i === needsAmpersand) {
                    formattedName += " & ";
                }
            }

            returnString += formattedName;
        } 
    }

    return returnString;
}
