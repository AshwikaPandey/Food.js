class Food {
   constructor(x, y) {
      this.image = loadImage("Milk.png")
      this.width = 20
      this.height = 20
      this.Visiblity = 255;
      this.foodStock=6
   
   }

   display() {
      var x = 80
      var y = 100
      imageMode(CENTER)
      image(this.image, 0, 0, this.width, this.height);

      if (this.foodStock !== 0) {
         for (var i = 0; i < this.foodStock; i++) {
            if (i % 10 == 0) {
               x = 80
               y = y + 50
            }
            image(this.image, x, y, 50, 50)
            x = x + 20
         }

      }
   }



   getCount() {
      var bottlesRef = database.ref('MilkBottles')
      //for reading
      bottlesRef.on("value", function (data) {
      
      this.foodStock = data.val()
        
      })
   }
   updateFoodStock(count) {
     // console.log(count)
      database.ref('/').update({
         MilkBottles: count
      })

   }


   deductFoodStock(Bottles) {

      database.ref('/').update({
         MilkBottles: Bottles
      })
      World.remove(world, this.foodStock1);
      push();
      this.Visiblity = this.Visiblity - 5;
      pop()
   }
}