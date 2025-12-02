type fish = { swim: () => void };
type bird = { fly: () => void };

function isBird(x: fish | bird): x is bird {
    return (x as bird).fly !== undefined;
}

function getFood(x: fish | bird) {
    if (isBird(x)) {
        x.fly();
    }
    else {
        x.swim();
    }
}




interface SuccessResponse {
    data: string;
}
interface ErrorResponse {
    errorMessage: string;
}

function handleResponse(response: SuccessResponse | ErrorResponse) {
    if ("errorMessage" in response) {
        console.log(response.errorMessage);
    } else {
        console.log(response.data);
    }
}