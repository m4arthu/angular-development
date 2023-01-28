import { Component, OnInit } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

dish: Dish
promotion: Promotion

constructor(private DishService: DishService, private PromotionService: PromotionService) {}  
ngOnInit(){
  this.dish = this.DishService.getFeaturedDish();
  this.promotion = this.PromotionService.getFeaturedPromotion()
}
}
