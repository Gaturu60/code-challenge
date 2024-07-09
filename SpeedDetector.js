function speedDetector(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const demeritPointsLimit = 12;


    if (speed <= speedLimit) {
        console.log("Ok");
    } else {
        const demeritPoints = Math.floor ((speed - speedLimit) / kmPerDemeritPoint );
        if (demeritPoints >= demeritPointsLimit) {
            console.log("License suspended");
        } else {
            console.log(`Points: ${demeritPoints}`);
        }
    }
}

// usage:
speedDetector(80); // Output: Points: 2
speedDetector(65); // Output: Ok
speedDetector(900); // Output: License suspended
speedDetector(73); // Output: Points: 0