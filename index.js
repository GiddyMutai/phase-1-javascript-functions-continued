// returns a Saturday activity
function saturdayFun(activity){
    switch (activity) {
        case `${activity}`:
            return `This Saturday, I want to ${activity}!`
        default:
            return 'This Saturday, I want to roller-skate!'
    }
}

// returns the Monday preferred work area
function mondayWork(workArea){
    switch (workArea){
        case `${workArea}`:
            return `This Monday, I will ${workArea}.`
        default:
            return 'This Monday, I will go to the office.'
    }
}

// a function that wraps the adjective with initialized symbols
function wrapAdjective(result="*"){
    return function(emphatic = "a hard worker") {
        return `You are ${result}${emphatic}${result}!`
    }
}

function wrapAdjective(result="||"){
    return function(emphatic = "a hard worker") {
        return `You are ${result}${emphatic}${result}!`
    }
}
