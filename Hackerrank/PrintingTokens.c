// Given a sentence, , print each word of the sentence in a new line.

// Input Format

// The first and only line contains a sentence, .

// Constraints


// Output Format

// Print each word of the sentence in a new line.

// Sample Input 0

// This is C 
// Sample Output 0

// This
// is
// C
// Explanation 0

// In the given string, there are three words ["This", "is", "C"]. We have to print each of these words in a new line.

// Sample Input 1

// Learning C is fun
// Sample Output 1

// Learning
// C
// is
// fun
// Sample Input 2

// How is that
// Sample Output 2

// How
// is
// that
// Language: C


#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

int main() {

    
    //Write your logic to print the tokens of the sentence here.
    char *s, *t;
    
    
    s = malloc(1024 * sizeof(char));
    
    scanf("%[^\n]", s);
    
    s = realloc(s, strlen(s) + 1);
    
    
    t = strtok(s, " ");
    
    while (t != NULL) {
    
        printf("%s\n", t);
    
        t = strtok(NULL, " ");
    
    }
    return 0;
}