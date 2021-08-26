import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  //Biến lưu trữ danh sách sản phẩm
  productList : any[] = [];

  //ProductList to Search
  productListToSearch : any[] = [];

  //Khai báo 1 product
  productModel : any;
  ModelTitle : string = "";
  ActiveAddEditProduct : boolean = false;

  //Close button
  @ViewChild('closebutton') closeButton : any;

  //Name Search
  nameSearch :string= "";


  //page phân trang
  pageSize : number = 10;
  //Current Page
  p:any;

  //product to Delete
  productToDelete : any;

  //Name Product
  NameDelete : any;

  //Url image edit

  urlImageedit : any;

  constructor(private productService : ProductService , private toastrService : ToastrService) { }

  ngOnInit(): void {
    this.onShowProductList();
  }

  onShowProductList(){
    this.productService.getAll().subscribe(
      data => {
        this.productList = data;
        this.productListToSearch = data;
      },
      error => {
        console.log(error);
        this.toastErrorLoad();
      }
  )}

  toastErrorLoad()
  {
    this.toastrService.error('Có lỗi trong quá trình xử lý' , 'Thông Báo' , {
      timeOut: 2000,
    })
  }

  toastAddSuccessfull()
  {
    this.toastrService.success('Thêm Thành Công' , 'Thông Báo' , {
      timeOut: 2000,
    })
  }


  addClickProduct()
  {
    this.productModel = {

      ID : 0,
      Name :  "",
      Alias :   "",
      CategoryID :  null,
      Image :  null,
      MoreImages :  null,
      price :  null,
      PromotionPrice :  null,
      Warranty :  null,
      Description :  "",
      Content :  "",
      HomeFlag :  null,
      HotFlag :  null,
      ViewCount :  null,
      CreatedDate : null,
      CreatedBy: null,
      UpdatedDate: null,
      UpdatedBy: null,
      MetaKeyword: null,
      MetaDescription: null,
      Status :  false,
      Tags :  null,

    }
    this.ModelTitle = "Thêm Sản Phẩm";
    this.ActiveAddEditProduct  = true;

  }

  //Close popup

  closeClick()
  {
    this.refreshProductList();
    this.ActiveAddEditProduct = false;
    console.log("close click to update");
    console.log(this.productModel);
  }

  refreshProductList()
  {
    this.productService.getAll().subscribe(data => {
      this.productList = data;
    })
  }


  removeVietnameseTones(str : any) {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g,"i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y");
    str = str.replace(/đ/g,"d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    // Some system encode vietnamese combining accent as individual utf-8 characters
    // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
    str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
    // Remove extra spaces
    // Bỏ các khoảng trắng liền nhau
    str = str.replace(/ + /g," ");
    str = str.trim();
    // Remove punctuations
    // Bỏ dấu câu, kí tự đặc biệt
    str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g," ");
    return str;
  }

  Search()
  {
    if(this.nameSearch == "")
    {
      this.ngOnInit();
    }else{
      this.productList = this.productListToSearch.filter(res => {
        return this.removeVietnameseTones(res.Name).toLocaleLowerCase().includes(this.removeVietnameseTones(this.nameSearch).toLocaleLowerCase());
      })
    }
  }

  //Phần Trang

  selectPageSize(event : any)
  {
    this.pageSize = Number(event.target.value);
  }

  //Sắp Xếp

  key = 'Name';
  reverse : boolean = false;

  sortName(key : any){

    this.reverse = !this.reverse;
    let direction = this.reverse ? 1 : -1;
    this.productList.sort((a , b) : number => {
      if(a[key] < b[key]){
        return -1*direction;
      }
      else if(a[key]  >b[key]){
        return 1*direction;
      }
      else{
        return 0;
      }
    });
  }


  deleteProduct(item : any)
  {
    this.NameDelete = item.Name;
    this.productToDelete = item;
  }

  confirmDelete()
  {
    this.productService.deleteProduct(this.productToDelete.ID).subscribe(
    response => {
      this.showDeleteSuccess();
      this.refreshProductList();
    },
    error => {
      console.log(error);
      this.errorDelete();
    }
    )
  }

  showDeleteSuccess() {
    this.toastrService.success('Xóa thành công', 'Thông báo', {
      timeOut: 2000,
    });
  }

  errorDelete()
  {
    this.toastrService.error('Có lỗi trong quá trình xử lý', 'Thông báo', {
      timeOut: 2000,
    });
  }

  //Sửa Sản Phẩm



  editProduct(item : any)
  {
    this.productModel = item;
    console.log(this.productModel);
    //gọi đến service để gán url image load lên popup
    this.productService.getImage().subscribe(data => {
      this.urlImageedit = data + this.productModel.Image;
    })
    console.log(this.urlImageedit);
    this.ModelTitle = "Cập nhật sản phẩm";
    this.ActiveAddEditProduct = true;
  }

}
