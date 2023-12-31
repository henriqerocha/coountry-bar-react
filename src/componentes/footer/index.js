import React from 'react';
import './style.css';

export default function Footer(){
    return(
        <footer>
            <div className='container-footer'>
                <div className='left-footer'>
                    <span>@countrybardrinkss</span>
                </div>
                <div className='right-footer'>
                    <div className='wpp'>
                    <a href='https://api.whatsapp.com/send?phone=5561991380680&text=Ol%C3%A1,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20Open%20Bar%20%F0%9F%8D%B9%20Meu%20evento%20%C3%A9%20dia%20:%20Quantidade%20de%20convidados%20:%20%20Local:%20%20Hor%C3%A1rio:%20Tipo%20de%20evento%20:%20Obs:' target='_blank'><img src='./assets/icone-wpp-amarelo.png' alt='contato whatsapp'></img></a>
                    </div>
                    <div className='insta'>
                    <a href='https://www.instagram.com/countrybardrinkss' target='_blank'><img src='./assets/icone-insta-amarelo.png' alt='contato instagran'></img></a>
                    </div>
                    <div className='email'>
                    <a href='mailto: countrybardrinks@gmail.com' target='_blank'><img src='./assets/icone-email-amarelo.png' alt='contato email'></img></a>
                    </div>
                </div>
            </div>
            <span className='copyright'>&copy; Todos os direitos reservados: <strong>Country Bar Drinks</strong></span>
            <span className='dev'>Desenvolvido por: <strong>HR DEV</strong></span>
        </footer>
    );
}