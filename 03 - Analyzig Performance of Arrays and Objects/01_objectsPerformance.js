/*

                WHEN TO USE OBJECTS:
    - When you DON'T need order
    - When you need FAST ACCESS or FAST INSERTION AND REMOVAL

    ===========================================================

                BIG O of Objects:
    - Insertion: O(1)
    - Removal: O(1)
    - Serching: O(N)
    - Access - O(1)
    - When you don't need ordering, objects are and excellent choice!

    =============================================================
    
                Big O of Object Methods:
    
    - Object.keys - O(N)
    - Object.values - O(N)
    - Object.entries - O(N)
    - hasOwnProperty - O(1)

*/

let instructor = {
  firstName: "tapioca",
  isInstructor: true,
  favoriteNumbers: [1, 2, 3, 4],
};
//console.log(Object.entries(instructor));
