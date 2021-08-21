import { Component, Injector } from '@angular/core';
//import { AuthenticationService, LoginPage, ApiResponse, HttpService } from 'sfscommon';
import { ActivatedRoute, Router, Params } from '@angular/router';
//import { sfsService } from 'src/app/services/common/sfs.service';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
//import { RegisterModel } from 'src/app/models/common/models';
//import { bizAppService } from 'src/app/services/business/business.service';
//import { MenuController } from '@ionic/angular';
//import swal from 'sweetalert';
//import { MainMenuService } from 'src/app/services/business/main-menu.service';
import { SafeResourceUrl } from '@angular/platform-browser';
//import { TdsProductoModel } from 'src/app/models/business/models';
//import { Constants } from 'src/app/shared/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  //Variables
 /*  guidPalApuroProduct = Constants.palApuro_ProductID;
  guidPalDentistaProduct = Constants.palDentista_ProductID;
  creditAmountRequested: number;
  productShow: string;
  paymentDeadline: number;
  valMin: number;
  valMax: number;
  incr: number;
  valMinCuotas: number;
  valMaxCuotas: number;
  incrCuotas: number;
  paymentsNumber: number;
  paymentAmmount: number;
  */
 
  existingUser: boolean = false;
  
 
  //Variables
  /*  guidPalApuroProduct = Constants.palApuro_ProductID;
   guidPalDentistaProduct = Constants.palDentista_ProductID;
   creditAmountRequested: number;
   productShow: string;
   paymentDeadline: number;
   valMin: number;
   valMax: number;
   incr: number;
   valMinCuotas: number;
   valMaxCuotas: number;
   incrCuotas: number;
   paymentsNumber: number;
   paymentAmmount: number;
   */
  // existingUser: boolean = false;
  username!: string;
  sizeGrid: number = 9;
  height: number = 0;
  isRecoveryPassword = false;
  isSetPassword = false;
 // loader: HTMLIonLoadingElement = null;
  isActivateAccountAndGo = false;
  urlPrixel: string = "https://camptrks.com/p.ashx?o=1082&e=1033&t=TRANSACTION_ID";
  urlPixelSafe!: SafeResourceUrl;
  public submitButtonText = 'Iniciar sesión';
  public submitButtonDisabled = false;
  formActivateAccount: FormGroup;
  isActivateAccount = false;
  isActivatedAccount = false;
  return: string = 'inicio';
  public activatingText = 'Guardar';
  public disabledButton = false;
  public textoModal = "ssdsfs";
  public loadingData = true;

 /*  palApuroProduct!:
  {
    minAmmount: number;
    maxAmmount: number;
    increment: number;
    weeksToPay: number;
    interestRate: number;
    daysToPay: number;
    insuranceCost: number;
    IVA: number;
    anualInterest: number;
  } */

  //Definición de formulario de nombre de usuario
  fields: Array<FormlyFieldConfig> = [];
  formlogin: FormGroup;
  model = { Email: '', Password: '', CellPhone: '' };
//  model: RegisterModel = { Email: '', Password: '', CellPhone: '' };

  //Definición de formulario de contraseña
  pwdFields: Array<FormlyFieldConfig> = [];
  passwordForm: FormGroup;

  //Definición de formulario de registro
  emailFields: Array<FormlyFieldConfig> = [];
  setPasswordFields: Array<FormlyFieldConfig> = [];
  setPasswordForm: FormGroup;
  emailForm: FormGroup;
  email!:string ;
  code!:string ;
  constructor(
    public injector: Injector,
    //public authService: AuthenticationService,
   // public sfsService: sfsService,
    public router: Router,
    public route: ActivatedRoute,
    //public bizAppService: bizAppService,
    //public menu: MenuController,
    //private mainMenuService: MainMenuService) {
  ){
    //super(injector, authService);
   // this.menu = menu;
   // this.menu.enable(false);

  /*   // VALIDACIÓN DE PARÁMETROS
    this.route.queryParams.subscribe((params: Params) => {
      this.creditAmountRequested = params.cantidad;
      this.paymentDeadline = params.cuotas;

      //Se verifica si se tiene la información de un producto válido en la URL
      if (params.producto == 'PA' || params.producto == 'PD') {
        this.productShow = params.producto;
        //Si el producto es Pal Apuro
        //Se inicializan los valores para mostrar la información aproximada del crédito en la barra lateral
        if (this.productShow == 'PA') {
          if (this.creditAmountRequested != null) {
            this.valMin = 2000;
            this.valMax = 5000;
            this.incr = 500;
          }
          else {
            this.creditAmountRequested = null;
            this.productShow = null;
            this.paymentDeadline = null;
          }
        }
        //Si el producto es Pal Negocio
        //Se inicializan los valores para mostrar la información aproximada del crédito en la barra lateral
        else if (this.productShow == 'PD') {
          if (this.paymentDeadline != null && this.creditAmountRequested != null) {
            this.valMin = 10000;
            this.valMax = 25000;
            this.incr = 1000;
            this.valMinCuotas = 12;
            this.valMaxCuotas = 24;
            this.incrCuotas = 1;
          }
          else {
            this.creditAmountRequested = null;
            this.productShow = null;
            this.paymentDeadline = null;
          }
        }
      }
      else {
        this.creditAmountRequested = null;
        this.productShow = null;
        this.paymentDeadline = null;
      }

      // VALIDACIÓN DE CANTIDAD DE CUOTAS
      var valueCuotas = +this.paymentDeadline;
      if (valueCuotas <= this.valMinCuotas) {
        this.paymentDeadline = this.valMinCuotas;
      }
      else if ((valueCuotas > this.valMinCuotas) && (valueCuotas < this.valMaxCuotas)) {
        this.paymentDeadline = this.validRound(valueCuotas, 'deadline');
      }
      else if (valueCuotas >= this.valMaxCuotas) {
        this.paymentDeadline = this.valMaxCuotas;
      }

      // VALIDACIÓN DE MONTOS SOLICITADOS
      var value = +this.creditAmountRequested;
      if (value <= this.valMin) {
        this.creditAmountRequested = this.valMin;
        this.paymentAmmount = this.setMonthlyAmmountToPay(this.creditAmountRequested);
      }
      else if ((value > this.valMin) && (value < this.valMax)) {
        this.creditAmountRequested = this.validRound(value, 'payment');
        this.paymentAmmount = this.setMonthlyAmmountToPay(this.creditAmountRequested);
      }
      else if (value >= this.valMax) {
        this.creditAmountRequested = this.valMax;
        this.paymentAmmount = this.setMonthlyAmmountToPay(this.creditAmountRequested);
      }

      if (this.creditAmountRequested == null) {
        this.sizeGrid = 12;
      }
    })
 */  

    //Diferentes formularios a mostrar en la ventana
    if (window.location.hash.indexOf("recovery-password") != -1) {
      this.isRecoveryPassword = true;
    }

   /*  if (window.location.hash.indexOf("activate-account/") != -1) {
      this.code = this.route.snapshot.paramMap.get("code");
      this.email = this.route.snapshot.paramMap.get("email");
      this.isActivateAccount = true;
      this.isActivateAccountAndGo = true;
    }

    if (window.location.hash.indexOf("activate-account-go") != -1) {
      this.code = this.route.snapshot.paramMap.get("code");
      this.email = this.route.snapshot.paramMap.get("email");
      this.isActivateAccountAndGo = true;
    }

    if (window.location.hash.indexOf("set-password") != -1) {
      this.code = this.route.snapshot.paramMap.get("code");
      this.email = this.route.snapshot.paramMap.get("email");
      this.isSetPassword = true;
    } */

    //Creación de formulario para nombre de usuario
    this.formlogin = new FormGroup({});
    this.formActivateAccount = new FormGroup({});
    this.fields = [{
      key: 'Email',
      type: 'input',
      templateOptions: {
        placeholder: 'Correo electrónico',
        required: true,
      }
    }];

    //Creación de formulario para contraseña
    this.passwordForm = new FormGroup({});
    this.pwdFields = [{
      key: 'Password',
      type: 'input',
      templateOptions: {
        placeholder: 'Contraseña*',
        type: 'password',
        required: true
      }
    }];

    //Creación de formulario de registro
    this.emailForm = new FormGroup({});
    this.emailFields = [{
      key: 'Email',
      type: 'input',
      templateOptions: {
        placeholder: 'Correo electrónico',
        type: 'input',
        required: true
      }
    }];
    this.setPasswordForm = new FormGroup({});
    this.setPasswordFields = [{
      key: 'Password',
      type: 'input',
      templateOptions: {
        placeholder: 'Contraseña',
        type: 'password',
        required: true,
        minLength: 8
      },
      validators: {
        Password: {
          expression: (control: { value: string; }) => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30}$/.test(control.value),
          message: 'Al menos 8 dígitos usando mayúsculas, minúsculas y números',
        }
      },
    },
    {
      key: 'RepeatPassword',
      type: 'input',
      templateOptions: {
        placeholder: 'Repita la contraseña',
        type: 'password',
        required: true
      },
      validators: {
        fieldMatch: {
          expression: (control: { value: string; }) => {
            return control.value == this.model.Password
          },
          message: 'Las contraseñas no coinciden',
        }
      },
    }];
  }

  //Regresar al inicio de sesión
  public goToLogin() {
    this.existingUser = false;
    //this.navCtrl.navigateForward(`login`, { animated: true }); ***se usa routing
  }

  //Navegar a la recuperación de la contraseña
  public goToRecoveryPassword() {
   // this.navCtrl.navigateForward(`recovery-password`, { animated: true });
  }

  onlyFields(keys: string[], fields: Array<FormlyFieldConfig>) {
    let elementsFinded: Array<FormlyFieldConfig> = [];

    for (let index = 0; index < keys.length; index++) {
      let finded = fields.find(p => p.key == keys[index]);
      if (finded != null) {
        elementsFinded.push(finded);
      }
    }
    return elementsFinded;
  }

  mostrarEmail() {
    this.fields = this.onlyFields(["Email"], this.fields);
  }

  mostrarPassword() {
    this.fields = this.onlyFields(["Password"], this.fields);
  }

  //Recuperación de contraseña
   recoverPassword() {
    this.savingStart();
    if (this.emailForm.valid == true) {
      let item = this.emailForm.value;
    //  let apiResponse: ApiResponse<any> = null;
     // apiResponse = await this.sfsService.RecoveryPassword(item.Email, "MBKUbiica");
      this.savingEnd();
      /* if (apiResponse.status == 'success') {
        await this.showOk(`Se ha enviado a su correo ${item.Email} el link para reestablecer su contraseña`);
        this.goBack();
      } else {
        await this.showOk(`El correo ${item.Email} no ha sido registrado`);
        this.goBack();
      } */
    }

  }

  //Regresar al inicio de sesión
  goBack() {
    console.log('regresa')
    //this.navCtrl.navigateForward(`login`, { animated: true });
  }

  ngOnInit() {

  //  this.loader = await this.loadingCtrl.create({ message: "Validando información, por favor espere...", });

    //Verificación de valores para mostrar las barras laterales en la ventana de inicio de sesión
   /*  if (this.productShow == 'PA') {
      await this.getProductValues();
      this.paymentsNumber = this.palApuroProduct.weeksToPay;
      this.paymentAmmount = this.setMonthlyAmmountToPay(this.creditAmountRequested);
    }
    else if (this.productShow == 'PD') {
      const params = {
        GuidProducto: this.guidPalDentistaProduct,
        Monto: String(this.creditAmountRequested),
        Cuotas: String(this.paymentDeadline)
      }
      let paymentAmmountPD = await this.getPaymentAmmountPD(params);
      this.paymentAmmount = paymentAmmountPD.data;
      this.paymentsNumber = this.paymentDeadline;
    } */

  /*   //Se verifica si se trata de un dispositivo móvil
    if (this.systemService.isMobile() == false) {
      this.height = (window.innerHeight - 110);
    } else {
      this.height = null;
    }
 */
  }

  //Obtener los datos preeliminares del crédito para un producto de Pal Apuro
  /* public async getPaymentAmmountPD(params: { GuidProducto: any, Monto: any, Cuotas: any }) {
    params.GuidProducto = params.GuidProducto;
    params.Monto = params.Monto;
    params.Cuotas = params.Cuotas;
 //   return <ApiResponse<any>>await this.bizAppService.CustomMethod(params, "TdsCreditoSet", "ObtenerMontoPago");
  } */

  //Obtener los valores del producto Pal Apuro
 /*   getProductValues() {

    const params = { GuidProducto: this.guidPalApuroProduct }

    let ApiResponse = await this.getValues(params);
    if (ApiResponse.status == "success") {
      var info = ApiResponse.data[0];
      this.palApuroProduct = {
        maxAmmount: info.Maximo,
        minAmmount: info.Minimo,
        increment: info.Incremento,
        daysToPay: info.DiasPlazo,
        weeksToPay: info.DiasPlazo / 7,
        interestRate: info.TasaInteres,
        insuranceCost: info.Seguro,
        IVA: info.TasaIVA,
        anualInterest: info.TasaAnualInteresSinIVA,
      };
    }
    else {
      //console.log("Error al recuperar información de producto");
    }
  } */

/*   //Obtener los valores de un producto
  public async getValues(params: { GuidProducto: any }): Promise<ApiResponse<TdsProductoModel>> {
    params.GuidProducto = params.GuidProducto;
    return <ApiResponse<any>>await this.bizAppService.CustomMethod(params, "TdsProductoSet", "GetProductValues");
  } */

  //Guardar una nueva contraseña
  async setNewPassword() {
    this.savingStart();
    if (this.setPasswordForm.valid == true) {
      let item = this.setPasswordForm.value;
     // let apiResponse: ApiResponse<any> = null;
     // apiResponse = await this.sfsService.SetPassword(this.email, this.code, item.Password, "TDSAllProducts");
      this.savingEnd();
      /* if (apiResponse.status == 'success') {
        await this.showOk(`La contraseña ha sido establecida`);
        this.goBack();
      } else {
        this.showToastMessage("Hubo un error al tratar de establecer la contraseña, intente más tarde por favor.");
      } */
    }
  }

  //Verificar si el usuario existe
  public validateIfUserExists() {
 //   this.loader.present();
    var userName = this.model.Email;
    const params = { userName: userName }
    this.submitButtonDisabled = true;
    /* this.validateUserName(params).then(async response => {
      this.submitButtonDisabled = false;
      if (response.data == true) {
      /*   this.loader.dismiss();
        this.loader.dismiss();
        this.loader = await this.loadingCtrl.create({ message: "Validando información, por favor espere...", }); 
        this.username = userName;
        this.existingUser = true;
      }
      else {
        if (userName.includes('@')) {
         /*  this.loader.dismiss();
          this.loader = await this.loadingCtrl.create({ message: "Validando información, por favor espere...", }); 
          this.showOk("No hemos encontrado una cuenta asociada al correo electrónico: " + userName + ", por favor regístrate.");
        }
        else {
/*           this.loader.dismiss();
          this.loader = await this.loadingCtrl.create({ message: "Validando información, por favor espere...", }); 
          this.showOk("No hemos encontrado una cuenta asociada al teléfono: " + userName + ", por favor regístrate.");
        }
       /*  this.loader.dismiss();
        this.loader = await this.loadingCtrl.create({ message: "Validando información, por favor espere...", });
        if (this.productShow == 'PA') {
          this.router.navigate(['register-user-page'], { state: { GuidProducto: this.palApuroProduct, MontoCredito: this.creditAmountRequested, CantidadPagos: this.paymentsNumber, MontoPago: this.paymentAmmount } });
        }
        else if (this.productShow == 'PD') {
          this.router.navigate(['register-user-page'], { state: { GuidProducto: this.guidPalDentistaProduct, MontoCredito: this.creditAmountRequested, CantidadPagos: this.paymentsNumber, MontoPago: this.paymentAmmount } });
        } 
      }
    }); */
  }

  //Validar si el correo electrónico ingresado, existe en la BD
  /* public async validateUserName(params: { userName: any }): Promise<ApiResponse<boolean>> {
    params.userName = params.userName;
   // return <ApiResponse<any>>await this.bizAppService.CustomMethod(params, "TdsClienteSet", "ValidateUserName");
  } */

  //Inicio de sesión
  public  handelLoginToSFS() {
   // this.loader.present();
    try {
      this.submitButtonText = 'Iniciando sesión...';
      this.submitButtonDisabled = true;
      var loginInfo =
      {
        UserName: this.model.Email,
        Password: this.model.Password
      };
    /*   if (this.passwordForm.valid == true) {
        const response = <ApiResponse>await this.authService.loginToSFSApp(loginInfo);
        if (response) {
          if (response.status == 'success') {
            this.loader.dismiss();
            this.userLoged(response.data);
            this.navCtrl.navigateRoot('/inicio');
          } else {
            this.loader.dismiss();
            this.loader = await this.loadingCtrl.create({ message: "Validando información, por favor espere...", });
            this.showValidationOk("No fue posible iniciar sesión, asegúrate de verificar tu correo electrónico, si ya lo hiciste, verifica tus datos de inicio de sesión.");
          }
        }
      } */
    } catch (error) {
      // console.error('handelLoginToSFS', error);
    }
    finally {
      this.submitButtonText = 'Iniciar sesión';
      this.submitButtonDisabled = false;
    }
  }

  //Iniciar sesión después de verificar su cuenta de correo electrónico
  /* public  loginWithCode() {

    try {
      let data = {};
      data["Code"] = this.code;
      data["Username"] = this.email;
      // Se hace la peticion al servidor.
      const response = <ApiResponse>await this.authService.loginToSFSApp(data);
      // Existe respuesta.
      if (response) {
        // La respuesta fue exitosa.
        if (response.status == 'success') {
          this.userLoged(response.data);
          if (this.return != null) {
            this.router.navigateByUrl(this.return);
          }
        } else {
          this.showOk("No fue posible autenticar al usuario");
          // Error en la petición.
          //this.handleLoginError(response.reason);
        }
      }
    } catch (error) {
      // this.httpErrorResponse(error); 
      // console.error('handelLoginToSFS', error);
    }
    finally {
      this.submitButtonText = 'Iniciar sesión';
      this.submitButtonDisabled = false;
    }
  } */

  //Activar el correo electrónico del cliente e iniciar sesión
 /*  async setActivateAccountAndGo() {
    this.loader.present();
    this.savingStart();
    if (this.formActivateAccount.valid == true) {
      //let userData = await this.userService.getUserData();
      let item = this.formActivateAccount.value;
      let apiResponse: ApiResponse<any> = null;
      apiResponse = await this.sfsService.ActivateAccount(this.email, this.code, "TDSAllProducts");
      this.savingEnd();
      if (apiResponse.status == 'success') {
        this.isActivatedAccount = true;
        this.loader.dismiss();
        this.loginWithCode();
      } else {
        this.showToastMessage("Hubo un error al activar la cuenta, intente más tarde por favor.");
      }
    }
  }
 */
  //Navegar a la ventana principal de Todo Sí
  public goToHome() {
    window.location.href = 'https://todosi.com';
  }

  //Navegar a la ventana de registro de usuario, con los parámetros de producto
  public register() {
 /*    if (this.productShow == 'PA') {
      this.router.navigate(['register-user-page'], { state: { NameProducto: this.productShow, GuidProducto: this.guidPalApuroProduct, MontoCredito: this.creditAmountRequested, CantidadPagos: this.paymentsNumber, MontoPago: this.paymentAmmount } });
    }
    else if (this.productShow == 'PD') {
      this.router.navigate(['register-user-page'], { state: { NameProducto: this.productShow, GuidProducto: this.guidPalDentistaProduct, MontoCredito: this.creditAmountRequested, CantidadPagos: this.paymentsNumber, MontoPago: this.paymentAmmount } });
    }
    else {
      this.router.navigate(['register-user-page']);
    } */
  }

  //Cambiar el usuaro con el que se iniciará sesión
  changeUserName() {
    this.existingUser = false;
  }

  //Objeto para mensajes informativos al usuario
  /* public async showOk(message?: string) {
    const response = await swal({
      title: null,
      className: 'swal-ok-modal',
      text: message,
      buttons: {
        confirmar: {
          text: 'Continuar',
          value: true,
          visible: true,
          className: 'modal-continuar-button',
          closeModal: true
        }
      }
    });
    return response;
  }
 */
  //Mensaje de validación que notifica que el usuario ha sido registrado exitosamente
 /*  public async showValidationOk(message?: string) {
    const response = await swal({
      title: null,
      className: 'swal-ok-modal',
      text: message,
      buttons: {
        confirmar: {
          text: 'Continuar',
          value: true,
          visible: true,
          className: 'modal-continuar-button',
          closeModal: true
        }
      }
    }).then((value: any) => {
      if (value) {
      //  this.navCtrl.navigateRoot('/login');
      };
    });
  } */

 /*  //Asignación del monto de pago semanal, de Pal Apuro
  setMonthlyAmmountToPay(creditAmmountSelected: any) {
    switch (creditAmmountSelected) {
      case 2000:
        //return 661.00; //MAMBU
        return 683.33; //nuevo excel
        break;
      case 2500:
        // return 822.00; // MAMBU
        return 850.00; //nuevo excel
        break;
      case 3000:
        // return 983.00; //MAMBU
        return 1016.67; //nuevo excel
        break;
      case 3500:
        // return 1144.00; //MAMBU
        return 1183.33; //nuevo excel
        break;
      case 4000:
        // return 1304.00; //MAMBU
        return 1350.00; //nuevo excel
        break;
      case 4500:
        // return 1465.00; //MAMBU
        return 1516.67; // nuevo excel
        break;
      case 5000:
        // return 1626.00; //MAMBU
        return 1683.33; // nuevo excel
        break;
    }
  } */

  //Validación de rangos para montos solicitados
/*   validRound(value: number, tipo: string) {
    if (this.productShow == 'PA' || tipo == 'payment') {
      var validSteps = this.range(this.valMin, this.valMax, this.incr);
    }
    else {
      var validSteps = this.range(this.valMinCuotas, this.valMaxCuotas, this.incrCuotas);
    }
    var minDif = Math.abs(value - validSteps[0]);
    var minIndex = 0;

    for (var i = 1; i < validSteps.length; i++) {

      if (Math.abs(value - validSteps[i]) < minDif) {
        minDif = Math.abs(value - validSteps[i]);
        minIndex = i;
      }
    }
    return validSteps[minIndex];
  } */

  //Arreglo de valores validos para montos solicitados
/*   range(start: any, stop: number, step: any) {
    var result = [];
    for (var i = start; i <= stop; i += step) {
      result.push(i);
    }
    return result;
  } */
  
  public savingStart() {
    this.activatingText = 'Guardando...';
    this.disabledButton = true;
    this.loadingData = true;
  }

  public savingEnd() {
    this.loadingData = false;
    this.activatingText = 'Guardado';
    this.disabledButton = false;
    this.loadingData = true;
  }
}




