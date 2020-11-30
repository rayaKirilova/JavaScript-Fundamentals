function architectWork(name, count){
    let personName = name ; 
    let projectsCount = Number(count); 

    console.log(`The architect ${personName} will need ${3 * projectsCount} hours to complete ${projectsCount} project/s.`);
}

architectWork("Petar", 3);