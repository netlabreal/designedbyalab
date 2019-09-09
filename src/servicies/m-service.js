export default class MService {
    mdata = [
        {
            id:1,
            avatar: 'Б',
            title: 'Бинесс партнер',
            subheader: 'Июнь 2019',
            opis: 'Сайт компании по прокату автомобилей.',
            img: '/img/2.png',
            tech: ['php', 'laravel', 'javascript', 'mysql'],
            site: 'http://business-partner-prim.ru'
        },
        {
            id:2,
            avatar: 'C',
            title: 'АН Собственник',
            subheader: 'Март 2019',
            opis: 'Сайт агенства недвижимости.',
            img: '/img/1.png',
            tech: ['python', 'javascript', 'mysql', 'bitrix 24'],
            site: 'http://sobstvennik.designedbylab.ru'
        },
        {
            id:3,
            avatar: 'D',
            title: 'СПК DenizCilck',
            subheader: 'Январь 2018',
            opis: 'Сайт сервисно-производственной компании.',
            img: '/img/3.png',
            tech: ['php', 'angular.js', 'mysql'],
            site: 'http://amtsltd.net/'
        }
    ];


    getWorks = () =>{
        return new Promise((resolve) => {
            setTimeout(()=>{
               resolve(this.mdata);
            }, 700);
        });
    }

    sendEmail = ({name, email, tema, message}) => {
        let dt = new FormData();
        dt.append('name', name);
        dt.append('email', email);
        dt.append('tema', tema);
        dt.append('message', message);
        return fetch('/m.php', {
            method: 'POST',
            body:dt
        });
    }


}