import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { ProductCategoryService } from 'src/app/service/productCategory.service';
import { CKEditor4 } from 'ckeditor4-angular/ckeditor';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.css']
})
export class AddEditProductComponent implements OnInit {

  //isClickedAddOrEdit
  isClickedAddOrEdit : boolean = false;

  @Input('productModel') productModel : any;
  @Input('urlImageedit') urlImageedit : any;

  //File to Upload
  fileToUpload: any;

  //show productCategory
  nameAndIdProductCategory : any[] = [];

  productList : any = [];

  ischecked :number= 0;

  //isSelected

  isSelected : number = -1;

  //Close button
  @Input('closeButton') closebuttonToAddorEdit : any;

  //Choose file
  @ViewChild('actionfile') onLinktoFile : any;

  ID : number = 0;
  Name : string =  "";
  Alias :  string =  "";
  CategoryID : any = null;
  Image : any = null;
  MoreImages : any = null;
  Price : any = null;
  PromotionPrice : any = null;
  Warranty : any = null;
  Description : string = "";
  Content : string = "";
  HomeFlag : any = null;
  HotFlag : any = null;
  ViewCount : any = null;
  CreatedDate : any = null;
  CreatedBy: any = null;
  UpdatedDate: any = null;
  UpdatedBy:any = null;
  MetaKeyword: any = null;
  MetaDescription: any = null;
  Status : boolean = false;
  Tags : any = null;

  constructor(private productService : ProductService , private productCategoryService : ProductCategoryService , private toastr: ToastrService) { }

  ngOnInit(): void {
    this.showNameAndIdProductCategory();
    this.loadProductModel();
  }


  loadProductModel()
  {
    this.productService.getAll().subscribe(data => {

      this.productList = data;

      this.ID = this.productModel.ID;
      this.Name = this.productModel.Name;
      this.Alias =  this.productModel.Alias;
      this.CategoryID = this.productModel.CategoryID;
      this.Image = this.productModel.Image;
      this.MoreImages = this.productModel.MoreImages;
      this.Price = this.productModel.Price;
      this.PromotionPrice = this.productModel.PromotionPrice;
      this.Warranty = this.productModel.Warranty;
      this.Description = this.productModel.Description;
      this.Content = this.productModel.Content;
      this.HomeFlag = this.productModel.HomeFlag;
      this.HotFlag = this.productModel.HotFlag;
      this.ViewCount = this.productModel.ViewCount;
      this.CreatedDate = this.productModel.CreatedDate;
      this.CreatedBy= this.productModel.CreatedBy;
      this.UpdatedDate= this.productModel.UpdatedDate;
      this.UpdatedBy=this.productModel.UpdatedBy;
      this.MetaKeyword= this.productModel.MetaKeyword;
      this.MetaDescription= this.productModel.MetaDescription;
      this.Status = this.productModel.Status;
      this.Tags = this.productModel.Tags;

      if(this.Status)
      {
        this.ischecked = 1;
      }else{
        this.ischecked = 0;
      }

      for(let dmuc of this.nameAndIdProductCategory)
      {
        if(dmuc.ID == this.productModel.ID)
        {
          this.isSelected = dmuc.ID;
          break;
        }
      }

      if(this.urlImageedit)
      {
        this.Image = this.urlImageedit;
      }

      console.log(this.productModel);

    })
  }

  showNameAndIdProductCategory()
  {
    this.productCategoryService.getAll().subscribe(
      data => {
        this.nameAndIdProductCategory = data;
      },
      error => {

      }
    )
  }

  AddProductClick()
  {
    this.isClickedAddOrEdit = true;
    var val =
    {
      Name : this.Name,
      Alias : this.Alias,
      CategoryID : this.CategoryID,
      Image : null,
      MoreImages : this.MoreImages,
      Price : this.Price,
      PromotionPrice : this.PromotionPrice,
      Warranty : this.Warranty,
      Description : this.Description,
      Content : this.Content,
      HomeFlag : this.HomeFlag,
      HotFlag : this.HotFlag,
      ViewCount : this.ViewCount,
      CreatedDate : this.CreatedDate,
      CreatedBy: this.CreatedBy,
      UpdatedDate: this.UpdatedDate,
      UpdatedBy:this.UpdatedBy,
      MetaKeyword: this.MetaKeyword,
      MetaDescription: this.MetaDescription,
      Status : this.Status,
      Tags : this.Tags,
    };

    this.productService.addProductCategory(val , this.fileToUpload).subscribe(
      data => {
        console.log(data);
        this.showAddSuccess();
        this.closebuttonToAddorEdit.nativeElement.click();
      },
      error => {
        console.log(error);
        this.showAddError();
      }
    )
    console.log(val);
  }

  showAddSuccess() {
    this.toastr.success('Thông Báo', 'Thêm Thành Công', {
      timeOut: 2000,
    });
  }

  showAddError()
  {
    this.toastr.error('Có Lỗi Trong quá trình xử lý', 'Thông Báo', {
      timeOut: 2000,
    });
  }

  handleFileInput(file : any)
  {
    this.fileToUpload = file.target.files.item(0);
    //Show image preview
    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.Image = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }

  onCheckboxChange(event : any)
  {
    this.Status = !this.Status;
  }

  onChangeCKEditor( event: CKEditor4.EventInfo ) {
    console.log( event.editor.getData() );
    this.Content = event.editor.getData();
  }

  cancelPopup()
  {
    this.closebuttonToAddorEdit.nativeElement.click();
  }


  //Sửa sản phẩm
  updateProduct()
  {
    var val =
    {
      ID : this.productModel.ID,
      Name : this.Name,
      Alias : this.Alias,
      CategoryID : this.CategoryID,
      Image : this.Image,
      MoreImages : this.MoreImages,
      Price : this.Price,
      PromotionPrice : this.PromotionPrice,
      Warranty : this.Warranty,
      Description : this.Description,
      Content : this.Content,
      HomeFlag : this.HomeFlag,
      HotFlag : this.HotFlag,
      ViewCount : this.ViewCount,
      CreatedDate : this.CreatedDate,
      CreatedBy: this.CreatedBy,
      UpdatedDate: this.UpdatedDate,
      UpdatedBy:this.UpdatedBy,
      MetaKeyword: this.MetaKeyword,
      MetaDescription: this.MetaDescription,
      Status : this.Status,
      Tags : this.Tags,
    };

    this.productService.updateProduct(val , this.fileToUpload).subscribe(
    response => {
      this.showUpdateSuccess();
      this.closebuttonToAddorEdit.nativeElement.click();
    },
    error =>{
      console.log(error);
      this.showErrorUpdate();
    });
  }

  showUpdateSuccess() {
    this.toastr.success('Sửa Thành Công', 'Thông báo', {
      timeOut: 2000,
    });
  }

  showErrorUpdate()
  {
    this.toastr.error('Có Lỗi Trong quá trình xử lý', 'Thông Báo', {
      timeOut: 2000,
    });
  }





}
