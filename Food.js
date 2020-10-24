class Food{
	constructor(){
		this.image = loadImage("Food Stock.png");
		this.foodStock = 0;
		//this.lastFed = null;
	}
		getFoodStock(){
			return this.foodStock;
		}
		updateFoodStock(food){
			this.foodStock = food;
		}
		deductFoodStock(){
			if(this.foodStock>0){
				this.foodStock = this.foodStock-1;
			}
		}

update(state){
	database.ref('/').update({
		gameState: state
	})
}

			hide(){
				if(gameState!=="Hungry"){
					feed.hide();
					addFood.hide();
					dog.remove();
				}else{
					food.show();
					addFood.show();
					dog.addImage(sadDog);
				}
			}

		bedroom(){
			background(bedroomImg, 550, 500);
		}
		garden(){
			background(gardenImg, 550, 500);
		}
		washroom(){
			background(washroomImg, 500, 500);
		}

	display(){
		var x = 80;
		var y = 100;

		imageMode(CENTER);
		//image(this.image, 720, 220, 70, 70);

		if(this.foodStock!==0){
			for(var i=0; i<this.foodStock; i++){
				if(i%10===0){
					x = 80;
					y = y+70;
				}
				image(this.image, x, y, 50, 50);
				x = x + 50;
			}
		}
	}
}