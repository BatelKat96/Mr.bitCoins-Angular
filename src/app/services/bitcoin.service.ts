import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, tap } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class BitCoinService {
    constructor(private http: HttpClient) { }

    private _RATE = 'rates'

    public getRate() {
        console.log('get rate');
        let rate = this._loadFromStorage(this._RATE)
        console.log(' up rate:', rate)
        if (rate) return rate
        console.log('hi', rate);
        rate = this.http.get('https://blockchain.info/tobtc?currency=USD&value=1')
            .pipe(
                // tap(res => console.log('res', res)),
                map(res => res)
            )
        console.log('end rate:', rate)
        this._saveToStorage(this._RATE, rate)

        return rate
    }


    private _saveToStorage(key: string, val: Observable<any[]>) {
        localStorage.setItem(key, JSON.stringify(val))
    }

    private _loadFromStorage(key: string) {
        let data = localStorage.getItem(key)
        return data ? JSON.parse(data) : undefined
    }
}