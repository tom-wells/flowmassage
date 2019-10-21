//loop over each section, get each image and replace with canvas 
const sections = document.querySelectorAll("section")

sections.forEach(section => {
  
  const originalImage = section.querySelector(".hero img")
  const originalImageSoruce = originalImage.getAttribute("src")
  
  section.innerHTML = ""
  
  const app = new PIXI.Application({
    width:1100,
    height:800,
    transparent:true
  })
  
  section.appendChild(app.view)
  // make a new image
  
  let image = null
  let displacementImage = null
  let rgbFilter = new PIXI.filters.RGBSplitFilter([0,0], [0,0], [0,0])
  // make a new loader 
  
  const loader = new PIXI.loaders.Loader()
  
  
  // lets load in our image
  
  loader.add("image", originalImageSoruce )
  loader.add("displacement", "/img/displacement4.jpg")
  
  
  loader.load((loader,resources) => {
    // once the image has loaded do things
    const image = new PIXI.Sprite( resources.image.texture)
    displacementImage = new PIXI.Sprite(resources.displacement.texture)
    
    image.x = 100 + 450
    image.y = 100 + 300
    image.width =600
    image.height = 300
    image.interactive = true
    image.anchor.x = 0.5
    image.anchor.y = 0.5
    
    displacementImage.width = 150
    displacementImage.height = 150
    displacementImage.texture.baseTexture.wrapMode = PIXI.WRAP_MODES_REPEAT
    
    
    
    
    image.filters = [
    //  new PIXI.filters.BlurFilter(3, 5),
    //  new PIXI.filters.NoiseFilter(1),
			new PIXI.filters.DisplacementFilter( displacementImage , 10),
      rgbFilter
    ]
    
    
    
    // add image to the app
    app.stage.addChild(image)
    app.stage.addChild(displacementImage)
    
    // add some rotation on each frame
//     app.ticker.add(()=> {
// //             displacementImage.x = displacementImage.x + 1
// //                   displacementImage.y = displacementImage.y + 1 

//     })
  })
  
  let currentX = 0
  let aimX = 0
 let currentY = 0
 let aimY = 0 
  // this is where i want to add my events 
  
  // section.addEventListener("mousemove", function(event){
 	// 	aimX = event.pageX
  //   aimY = event.pageY
  // })
  
  // lets make animation
  
  const animate = function() {
    // currentX should get towards aimX every frame
    
    const diffX = aimX - currentX
    const diffY = aimY - currentY
    
    currentX = currentX + (diffX * 1)
    currentY = currentY +(diffY * 1)
    // if there is a displacement Image load then move it
    
    if (displacementImage) {
      displacementImage.x = currentX
      displacementImage.y = displacementImage.y + 1 + (diffY * 0.01 )
      
    //  rgbFilter.red = [diffX * 0.1,0]
     // rgbFilter.green = [0,diffY * 0.1]
    }
    
    
    // keep running the animation for every frame
    requestAnimationFrame(animate)
  }
  // Run animation
  animate()
  
  
  
})

