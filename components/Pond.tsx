import { useEffect, useRef } from 'react'

let lilypad = {x: 0, y: 100, frame: 0, dropped: false}
let water = new Array(250).fill(0).map(()=>0)
let waterOld = water.slice()

function render(ctx: CanvasRenderingContext2D) {
  ctx.canvas.width = window.innerWidth
  ctx.canvas.height = window.innerHeight

  // air
  ctx.fillStyle = '#ffffff'
  ctx.fillRect(0, 0, ctx.canvas.width, 200)

  // water
  let waterCopy = water.slice()
  for(let i = 1; i < water.length - 1; i++) {
    let newHeight = water[i-1] + water[i+1] - waterOld[i]
    waterCopy[i] = newHeight * 0.995
  }
  waterOld = water.slice()
  water = waterCopy

  ctx.fillStyle = '#ccfbf1'
  ctx.beginPath()
  ctx.moveTo(0, 200)

  const averageAmount = 3
  for(let i = 0; i < water.length; i++) {
    let average = 0
    let count = 0
    for(let j = -averageAmount; j < averageAmount; j++) {
      if(i+j >= 0 && i+j < water.length) {
        average += water[i+j]
        count++
      }
    }
    average /= count
    ctx.lineTo(i * (ctx.canvas.width / (water.length-1)), 200 - average)
  }
  ctx.lineTo(ctx.canvas.width, ctx.canvas.height)
  ctx.lineTo(0, ctx.canvas.height)
  ctx.closePath()
  ctx.fill()

  // handle water droplet
  let animFrame = lilypad.frame % 130

  if(animFrame === 0) {
    lilypad.dropped = false
  }
  
  let dropletHeight = animFrame * animFrame * 0.2 - 10
  ctx.fillStyle = '#ccfbf1'
  ctx.ellipse(ctx.canvas.width/2, dropletHeight, 10, 10, 0, 0, Math.PI*2)
  ctx.fill()

  if(dropletHeight > 200 - water[Math.floor(water.length/2)] && !lilypad.dropped) {
    water[Math.floor(water.length/2)] += 30
    lilypad.dropped = true
  }
  lilypad.frame++
}

function Pond() {
  const canvas = useRef<HTMLCanvasElement>(null)

  useEffect(()=>{
    if(canvas.current) {
      const ctx = canvas.current.getContext('2d') as CanvasRenderingContext2D

      let interval = setInterval(()=>render(ctx), 1000 / 60)

      return ()=>clearInterval(interval)
    }
  }, [canvas])

  return (
    <div className="h-screen">
      <canvas ref={canvas}></canvas>
    </div>
  )
}

export default Pond