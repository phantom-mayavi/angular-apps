import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

  onSelectRecipe(recipe: Recipe): void {
    console.log("Recipe name in recipes main component " + recipe.name);
    this.selectedRecipe = recipe;
  }

}
