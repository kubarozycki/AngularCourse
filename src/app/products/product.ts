import {Category} from '../category/category';
export class  Product{
    ProductName:string;
    CategoryDef:Category;
    ImageSource:string;
    ElementClass:string;
    constructor(productName:string,categoryDef:Category,imageSource:string){
        this.ProductName=productName;
        this.CategoryDef=categoryDef;
        this.ImageSource=imageSource;
        if(this.CategoryDef.CategoryName=='beverages')
        {
            this.ElementClass="withBg";
        }
    }
}

