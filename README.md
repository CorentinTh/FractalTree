# FractalTree

![image fractal tree](http://corentin-thomasset.fr/public/img1.PNG "Image fractal tree")

## Description
A javascript program that draw a fractal tree using recursive functions (function called by itself).

Try it: [Live demo](http://divers.corentin-thomasset.fr/fractal-tree/index.html).

## Recusive function
Here is the recursive function: 
```javascript
function drawBranch(lenght) {
    // We draw the branch
    ctx.moveTo(0,0);
    ctx.lineTo(0,-lenght);
    
    // We move the orthonormal reference to end of the line.
    ctx.translate(0, -lenght);

    // To avoid infinite repetitions, we add new branches only if their length if greater than 4px
    if (lenght > 4) {
        // We rotate the orthonormal reference clockwise...
        ctx.save();
        ctx.rotate(angle);
        // ... and call the function with a reduced length
        drawBranch(lenght * reducer);
        ctx.restore();

        // We rotate the orthonormal reference anti-clockwise...
        ctx.save();
        ctx.rotate(-angle);
        // ... and call the function with a reduced length
        drawBranch(lenght * reducer);
        ctx.restore();
    }
}
```

## Parameters
Their is some sliders that permits to customize the tree.

### Angle
The angle slider permits to set the angle between each new branch of the tree.

### Length
It permits to set the initial length of a branch (the trunc at the begining).

### Reducer
It permits to set the quotient of reduction at each generation of a branch. 
```Javascript
length_of_a_branch = length * reducer * number_of_generation 
```
So, the bigger the reducer the more branches you have (and more time it get to render).
