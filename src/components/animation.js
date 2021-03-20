export function chain(props) {
  if (props && props.parent) {
    // console.log("Parent", props.parent)
  } else if (props && props.elements) {
    // only one delay
    if (typeof props.delay == typeof 5) {
      props.elements.map((element, index) => {
        // console.log(typeof props.delay, "TYOE")
        setTimeout(() => {
          apply(element, props.style)
        }, props.delay + index * props.delay)
      })
    }
    // More than one delay
    else {
      // console.log("ARRAYYYYY")
      props.elements.map((element, index) => {
        setTimeout(() => {
          apply(element, props.style)
        }, props.delay[index] + index * props.delay[index])
      })
    }
  }
}

const apply = (element, style) => {
  Object.assign(document.querySelector(element).style, style)
}

// cname: Class which is to be selected
// styleClass: Class which is to be applied
// delay: the delay between application of styling to children
// children: boolean to tell if children are to be selected or parent
export const scrollAnimate = props => {
  // If cname is given then select that class
  if (props.cname) {
    // If children of the class provided need to be applied with the styleClass(when parent is visible)
    if (props.children == true) {
      var cArray
      // Get the parent element
      var parent = document.querySelector(`.${props.cname}`)
      // Get an array of all children of parent
      cArray = Array.prototype.slice.call(
        document.querySelector(`.${props.cname}`).childNodes
      )
      // If a style is given to apply to the children
      if (props.style) {
        if (view(parent)) {
          cArray.map((child, index) => {
            setTimeout(() => {
              Object.assign(child.style, props.style)
            }, props.delay + index * props.delay)
          })
        }
        // If class is given to apply to the children
      } else if (props.styleClass) {
        // If parent is in view then apply the style to the children at the specified delay
        if (view(parent)) {
          cArray.map((child, index) => {
            setTimeout(() => {
              child.classList.add(props.styleClass)
            }, props.delay + index * props.delay)
          })
        }
      }
    }
    // If the elements with cname are to be selected(and not children)
    else {
      cArray = Array.prototype.slice.call(
        document.querySelectorAll(`.${props.cname}`)
      )
      // If style is given to apply
      if (props.style) {
        cArray.forEach(element => {
          if (view(element)) {
            Object.assign(element.style, props.style)
          } else {
            Object.assign(element.style, props.rstyle)
          }
        })
        // If class is given to apply
      } else if (props.styleClass) {
        cArray.forEach(element => {
          if (view(element)) {
            element.classList.add(props.styleClass)
          } else {
            element.classList.remove(props.styleClass)
          }
        })
      }
    }
  }
}

// Check if an element is within the viewport as specified by top and bottom
export const view = (element, top = 0.2, bottom = 0.8) => {
  var bounding = element.getBoundingClientRect()
  if (
    bounding.top > window.innerHeight * top &&
    bounding.top < window.innerHeight * bottom
  ) {
    return true
  } else {
    return false
  }
}
