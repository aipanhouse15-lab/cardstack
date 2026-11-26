"use client";
import {useEffect,useState} from 'react';
import Script from 'next/script';
import {Analytics} from '@vercel/analytics/react';
const KEY='assure-analytics-consent-v1';
const GA='G-PHSZXX204P';
export default function AnalyticsConsent(){
 const [choice,setChoice]=useState(null),[open,setOpen]=useState(false);
 useEffect(()=>{let value=null;try{value=localStorage.getItem(KEY);}catch{}setChoice(value==='granted'||value==='denied'?value:null);setOpen(value!=='granted'&&value!=='denied');const show=()=>setOpen(true);window.addEventListener('assure:privacy-settings',show);return()=>window.removeEventListener('assure:privacy-settings',show);},[]);
 function save(value){
  try{localStorage.setItem(KEY,value);}catch{}
  if(value==='denied'){
   window['ga-disable-'+GA]=true;
   window.gtag?.('consent','update',{analytics_storage:'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});
   for(const cookie of document.cookie.split(';')){const name=cookie.trim().split('=')[0];if(/^_ga(?:_|$)|^_gid$|^_gat/.test(name)){for(const domain of ['',location.hostname,'.'+location.hostname,location.hostname.replace(/^www\./,'.')])document.cookie=name+'=; Max-Age=0; path=/'+(domain?'; domain='+domain:'');}}
  }else window['ga-disable-'+GA]=false;
  const revoke=choice==='granted'&&value==='denied';setChoice(value);setOpen(false);if(revoke)location.reload();
 }
 return <>
  {choice==='granted'&&<><Script id="ga-consent-init" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];window.gtag=function(){window.dataLayer.push(arguments)};gtag('consent','default',{analytics_storage:'granted',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});gtag('js',new Date());gtag('config','${GA}');`}</Script><Script src={`https://www.googletagmanager.com/gtag/js?id=${GA}`} strategy="afterInteractive"/><Analytics/></>}
  {open&&<section aria-label="Analytics privacy choices" className="analytics-consent"><div><strong>Optional analytics</strong><p>Allow Google Analytics and Vercel Analytics to help us understand site usage? The tools work without them. <a href="/privacy">Privacy details</a></p></div><div className="consent-actions"><button type="button" onClick={()=>save('denied')}>Reject optional analytics</button><button type="button" onClick={()=>save('granted')}>Allow analytics</button></div></section>}
 </>;
}
export function PrivacySettingsButton(){return <button type="button" onClick={()=>window.dispatchEvent(new Event('assure:privacy-settings'))}>Privacy choices</button>;}
