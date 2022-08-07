import Image from 'next/image';
import Logo from '../../public/uploads/Logo.png'


const Navbar = () => {
    return (
        <nav className="Navbar">

            <div className="nav-right">
              <Image quality={100} src={Logo} width={250} height={300} />
              <div className="logo-title">
                  <h1 >دندان پزشکی سامان</h1>
                  <p>Saman Dental</p>
            </div>
            </div>
            <div className="nav-Mid">
              <ul>
                  <li><a>خدمات تخصصی دندانپزشکی</a>
                  <ul>
                      <li><a>عصب کشی</a></li>
                      <li><a>پرکردن دندان</a></li>
                      <li><a> جراحی فک و صورت</a></li>
                      <li><a>ایمپلت</a></li>
                  </ul>
                  </li>
                  <li><a>خدمات زیبایی کلینیک</a>
                  <ul>
                      <li><a>اورتودنسی</a></li>
                      <li><a>کامپوزیت</a></li>
                      <li><a>لمینت</a></li>
                  </ul>
                  </li>
                  <li><a>ثبت نوبت</a></li>
                  <li><a>تماس با ما</a></li>
              </ul>
            </div>
            <div className="nav-left">
                
            </div>

        </nav>
    )
}

export default Navbar
