import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms'; // Pastikan ReactiveFormsModule diimpor
import { LoginPage } from './login.page';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LoginPage],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule,
        ReactiveFormsModule // Pastikan ReactiveFormsModule diimpor
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    router = TestBed.inject(Router); // Gunakan TestBed.inject alih-alih TestBed.get yang sudah deprecated
    component = fixture.componentInstance;
    fixture.detectChanges(); // Jalankan deteksi perubahan
  }));

  it('should create form on init', () => {
    component.ngOnInit(); // Pastikan ngOnInit dipanggil sebelum memeriksa form
    expect(component.form).toBeDefined(); // Memeriksa bahwa form telah didefinisikan
  });

  it('should go to home page on login', () => {
    spyOn(router, 'navigate'); // Spy pada metode navigate dari router
    component.login(); // Simulasikan aksi login
    expect(router.navigate).toHaveBeenCalledWith(['home']); // Periksa apakah router.navigate dipanggil dengan ['home']
  });

  it('should go to register page on register', () => {
    spyOn(router, 'navigate'); // Memata-matai (spy) metode 'navigate' dari router
    component.register(); // Panggil metode 'register' yang seharusnya mengarahkan ke halaman 'register'
    expect(router.navigate).toHaveBeenCalledWith(['register']); // Memeriksa apakah 'navigate' dipanggil dengan argumen ['register']
  });
});
