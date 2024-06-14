// variavel para verificar se ha algum caractere com frequencia impar
const oddCount = 0;
function permuteToPallindrome(str){
    let frequencyMap = Map();

    for(let i = 0; i < str.length;){
        
        // Skip white spaces
        if(str[i] === ' ') {
            i++;
            continue;
        }

        // If the character is not in the map, add it
        if(!frequencyMap.has(str[i])){
            frequencyMap.set(str[i], 1);
            oddCount++;
        }
        else {
            // Increment the count of the character
            let count = frequencyMap.get(str[i]);
            frequencyMap.set(str[i], count + 1);
            if((count + 1) % 2 === 0){
                oddCount--;
            }
            else {
                oddCount++;
            }
        }
        i++;
    }
}