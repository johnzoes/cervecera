import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductsComponent } from './pages/products/products.component';
import { FAQComponent } from './pages/faq/faq.component';
import { CategoriesComponent } from './pages/categories/categories.component';

export const routes: Routes = [

    {
        path: "",
         component : HomeComponent
    },
    {
        path: "categories",
         component : CategoriesComponent
    },
    {
        path: "about_us",
         component : AboutUsComponent
    },
    {
        path: "contact",
         component : ContactComponent
    },
    {
        path: "products",
         component : ProductsComponent
    },
    {
        path: "faq",
         component : FAQComponent
    },
];



