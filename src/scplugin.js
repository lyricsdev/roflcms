import { store } from "./store/index"
import moment from "moment-timezone";

export default {
    install (Vue, options) {
        Vue.mixin({
            methods: {
                url(path){
                    return 'https://' + window.location.hostname + '/' + path;
                },
                formatUnix(timestamp){
                    return moment.unix(timestamp).format('lll');
                },
                nowUnix(){
                    return moment().unix();
                },
                getHeadUrl(){
                    return 'https://img.gazeta.ru/files3/397/14400397/chmonya-pic_32ratio_900x600-900x600-7396.jpg'
                },
                hasPermission(perm){
                    return store.getters.userPermissions.includes(perm);
                },
                getIntegrationURL(driver, method){
                    return store.getters.integrationUrls[driver][method];
                },
                declOfNum(n, titles) {
                    return titles[(n % 10 === 1 && n % 100 !== 11) ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2]
                },
                humanDiff(date){
                    var str = [];

                    var diffDuration = moment.duration(moment().diff(moment.tz(date, 'Europe/Moscow')));

                    diffDuration.years() > 0 ? str.push(diffDuration.years() + ' ' + this.declOfNum(diffDuration.years(), ['год', 'года', 'лет'])) : null;

                    diffDuration.months() > 0 ? str.push(diffDuration.months() + ' ' + this.declOfNum(diffDuration.months(), ['месяц', 'месяца', 'месяцев'])) : null;

                    diffDuration.years() <= 0 &&
                    diffDuration.months() <= 0 &&
                    diffDuration.days() > 0 ?
                        str.push(diffDuration.days() + ' ' + this.declOfNum(diffDuration.days(), ['день', 'дня', 'дней'])) : null;

                    diffDuration.years() <= 0 &&
                    diffDuration.months() <= 0 &&
                    diffDuration.days() <= 0 &&
                    diffDuration.hours() > 0 ?
                        str.push(diffDuration.hours() + ' ' + this.declOfNum(diffDuration.hours(), ['час', 'часа', 'часов'])) : null;

                    diffDuration.years() <= 0 &&
                    diffDuration.months() <= 0 &&
                    diffDuration.days() <= 0 &&
                    diffDuration.hours() <= 0 &&
                    diffDuration.minutes() > 0 ?
                        str.push(diffDuration.minutes() + ' ' + this.declOfNum(diffDuration.minutes(), ['минуту', 'минуты', 'минут'])) : null;

                    diffDuration.years() <= 0 &&
                    diffDuration.months() <= 0 &&
                    diffDuration.days() <= 0 &&
                    diffDuration.hours() <= 0 &&
                    diffDuration.minutes() <= 0 &&
                    diffDuration.seconds() > 0 ?
                        str.push(diffDuration.seconds() + ' ' + this.declOfNum(diffDuration.seconds(), ['секунду', 'секунды', 'секунд'])) : null;


                    return str.join(' ');
                },
                readableNum(n, separator = ' '){
                    let a = n.toString().split('').reverse();
                    a.forEach(function(item, index, array){
                        if((index + 1) % 3 === 0) array[index] = separator + item;
                    });
                    return a.reverse().join('');
                }
            }
        })
    }
}