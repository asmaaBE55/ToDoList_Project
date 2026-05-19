import{useState,useEffect,useCallback}from"react";const _0x4a2f={0:["Meditazione mattutina 🧘","Revisione settimana","Chiamata famiglia","Passeggiata nel parco"],1:["Pianificazione settimanale 📋","Rispondere alle email","Workout mattutino","Review obiettivi"],2:["Meeting di lavoro 💼","Studiare nuovo argomento","Pausa relax pomeriggio","Lettura serale"],3:["Sprint review progetto","Sessione brainstorming 💡","Palestra","Meditazione sera"],4:["Deep work session 🎯","Call con cliente","Aggiornamento portfolio","Yoga"],5:["Progetti personali 🚀","Pulizia spazio lavoro","Esplorare nuova skill","Film serale"],6:["Recupero e ricarica 🌟","Meal prep settimanale","Lettura libro","Passeggiata natura"]};const _0xm3=["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"];const _0xd7=["Dom","Lun","Mar","Mer","Gio","Ven","Sab"];const _0xf1=(y,m)=>new Date(y,m+1,0).getDate();const _0xf2=(y,m)=>new Date(y,m,1).getDay();let _0xc9=1e3;const _0xnid=()=>++_0xc9;

export default function _0xApp(){
const _0xt=new Date();
const[_0xY,_s0xY]=useState(_0xt.getFullYear());
const[_0xM,_s0xM]=useState(_0xt.getMonth());
const[_0xD,_s0xD]=useState(_0xt.getDate());
const[_0xTk,_s0xTk]=useState({});
const[_0xNT,_s0xNT]=useState("");
const[_0xEI,_s0xEI]=useState(null);
const[_0xET,_s0xET]=useState("");
const[_0xCf,_s0xCf]=useState(false);
const[_0xPR,_s0xPR]=useState(false);
const[_0xAL,_s0xAL]=useState(false);
const[_0xCC,_s0xCC]=useState(false);
const _0xDK=`${_0xY}-${_0xM+1}-${_0xD}`;
useEffect(()=>{const _v=localStorage.getItem("\x61\x69\x2d\x74\x6f\x64\x6f\x2d\x74\x61\x73\x6b\x73\x2d\x6c\x69\x67\x68\x74");if(_v)_s0xTk(JSON.parse(_v));},[]);
useEffect(()=>{localStorage.setItem("\x61\x69\x2d\x74\x6f\x64\x6f\x2d\x74\x61\x73\x6b\x73\x2d\x6c\x69\x67\x68\x74",JSON.stringify(_0xTk));},[_0xTk]);
const _0xCT=_0xTk[_0xDK]||[];
useEffect(()=>{_s0xCf(false);_s0xPR(false);if(!_0xTk[_0xDK])_0xGA();},[_0xDK]);
const _0xGA=useCallback(()=>{_s0xAL(true);setTimeout(()=>{const _dw=new Date(_0xY,_0xM,_0xD).getDay();const _sg=_0x4a2f[_dw]||_0x4a2f[1];const _at=_sg.map(_t=>({id:_0xnid(),text:_t,done:false,isAi:true}));_s0xTk(_p=>({..._p,[_0xDK]:_at}));_s0xAL(false);},900);},[_0xDK,_0xY,_0xM,_0xD]);
const _0xAT=()=>{if(!_0xNT.trim())return;_s0xTk(_p=>({..._p,[_0xDK]:[...(_p[_0xDK]||[]),{id:_0xnid(),text:_0xNT.trim(),done:false,isAi:false}]}));_s0xNT("");_s0xCf(false);_s0xPR(false);};
const _0xTG=_id=>_s0xTk(_p=>({..._p,[_0xDK]:(_p[_0xDK]||[]).map(_t=>_t.id===_id?{..._t,done:!_t.done}:_t)}));
const _0xDT=_id=>_s0xTk(_p=>({..._p,[_0xDK]:(_p[_0xDK]||[]).filter(_t=>_t.id!==_id)}));
const _0xSE=_t=>{_s0xEI(_t.id);_s0xET(_t.text);};
const _0xSV=_id=>{if(!_0xET.trim())return;_s0xTk(_p=>({..._p,[_0xDK]:(_p[_0xDK]||[]).map(_t=>_t.id===_id?{..._t,text:_0xET.trim()}:_t)}));_s0xEI(null);_s0xET("");};
const _0xCL=()=>{_s0xCf(true);_s0xPR(true);_s0xCC(true);setTimeout(()=>_s0xCC(false),3000);};

const _0xPDF=async()=>{
  const{jsPDF}=await import("https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js");
  const _doc=new jsPDF({orientation:"portrait",unit:"mm",format:"a4"});
  const W=210,H=297,M=18;

  // ── BACKGROUND sfumato pastello ──
  _doc.setFillColor(250,245,255);
  _doc.rect(0,0,W,H,"F");

  // Gradient simulato con bande sovrapposte
  for(let _i=0;_i<H;_i+=2){
    const _r=Math.round(250-(_i/H)*8);
    const _g=Math.round(245-(_i/H)*15);
    const _b=255;
    _doc.setFillColor(_r,_g,_b);
    _doc.rect(0,_i,W,2,"F");
  }

  // ── HEADER CARD con gradiente viola→pink ──
  // Sfondo header viola
  _doc.setFillColor(109,40,217);
  _doc.roundedRect(0,0,W,52,0,0,"F");
  // Overlay pink destra
  _doc.setFillColor(219,39,119);
  _doc.roundedRect(W*0.55,0,W*0.45,52,0,0,"F");
  // Overlay acqua angolo
  _doc.setFillColor(6,182,212);
  _doc.roundedRect(W*0.82,0,W*0.18,52,0,0,"F");
  // Shine strip in cima
  _doc.setFillColor(255,255,255);
  _doc.setGState&&_doc.setGState(new _doc.GState({opacity:0.08}));
  _doc.rect(0,0,W,8,"F");

  // ── LOGO / ICONA ──
  _doc.setFillColor(255,255,255);
  _doc.circle(M+8,26,7,"F");
  _doc.setTextColor(109,40,217);
  _doc.setFontSize(10);
  _doc.setFont("helvetica","bold");
  _doc.text("AI",M+8,27.5,{align:"center"});

  // ── TITOLO ──
  _doc.setTextColor(255,255,255);
  _doc.setFontSize(20);
  _doc.setFont("helvetica","bold");
  _doc.text("Smart To Do List",M+22,21);
  _doc.setFontSize(8);
  _doc.setFont("helvetica","normal");
  _doc.setTextColor(220,200,255);
  _doc.text("AI Powered • Productivity Planner",M+22,29);

  // ── DATA PILL ──
  const _ds=`${_0xD} ${_0xm3[_0xM]} ${_0xY}`;
  _doc.setFillColor(255,255,255);
  _doc.roundedRect(W-M-50,35,50,12,6,6,"F");
  _doc.setTextColor(109,40,217);
  _doc.setFontSize(8);
  _doc.setFont("helvetica","bold");
  _doc.text(_ds,W-M-25,43,{align:"center"});

  // ── STATS CARD ──
  const _dn=_0xCT.filter(_t=>_t.done).length;
  const _tot=_0xCT.length;
  const _pct=_tot?Math.round((_dn/_tot)*100):0;

  _doc.setFillColor(255,255,255);
  _doc.roundedRect(M,58,W-M*2,22,5,5,"F");
  _doc.setDrawColor(196,181,253);
  _doc.setLineWidth(0.4);
  _doc.roundedRect(M,58,W-M*2,22,5,5,"S");

  // 3 stat blocks
  const _sw=(W-M*2)/3;
  [[_dn,"✓ Completati","#059669"],[_tot-_dn,"○ Rimanenti","#7C3AED"],[`${_pct}%`,"Completamento","#DB2777"]].forEach(([_v,_l,_c],_i)=>{
    const _x=M+_sw*_i+_sw/2;
    const[_cr,_cg,_cb]=_c==="#059669"?[5,150,105]:_c==="#7C3AED"?[124,58,237]:[219,39,119];
    _doc.setTextColor(_cr,_cg,_cb);
    _doc.setFontSize(13);
    _doc.setFont("helvetica","bold");
    _doc.text(String(_v),_x,70,{align:"center"});
    _doc.setTextColor(156,163,175);
    _doc.setFontSize(7);
    _doc.setFont("helvetica","normal");
    _doc.text(_l,_x,76,{align:"center"});
    if(_i<2){
      _doc.setDrawColor(229,222,255);
      _doc.setLineWidth(0.3);
      _doc.line(M+_sw*(_i+1),61,M+_sw*(_i+1),78);
    }
  });

  // ── PROGRESS BAR ──
  _doc.setFillColor(237,233,254);
  _doc.roundedRect(M,84,W-M*2,5,2,2,"F");
  if(_pct>0){
    _doc.setFillColor(124,58,237);
    _doc.roundedRect(M,84,(W-M*2)*(_pct/100),5,2,2,"F");
    // Gradient overlay
    _doc.setFillColor(236,72,153);
    _doc.roundedRect(M+(W-M*2)*(_pct/100)*0.6,84,(W-M*2)*(_pct/100)*0.4,5,2,2,"F");
  }
  _doc.setTextColor(124,58,237);
  _doc.setFontSize(7);
  _doc.setFont("helvetica","bold");
  _doc.text(`${_pct}%`,W-M,87,{align:"right"});

  // ── SEZIONE TASKS ──
  _doc.setTextColor(109,40,217);
  _doc.setFontSize(9);
  _doc.setFont("helvetica","bold");
  _doc.text("LE TUE ATTIVITÀ",M,97);
  _doc.setDrawColor(196,181,253);
  _doc.setLineWidth(0.3);
  _doc.line(M,99,W-M,99);

  // ── TASK ITEMS ──
  let _y=106;
  _0xCT.forEach((_t,_i)=>{
    if(_y>272){_doc.addPage();_y=20;
      _doc.setFillColor(250,245,255);_doc.rect(0,0,W,H,"F");
    }
    const _isDone=_t.done;
    // Card sfondo
    if(_isDone){
      _doc.setFillColor(240,253,244);
      _doc.roundedRect(M,_y-4,W-M*2,13,3,3,"F");
      _doc.setDrawColor(167,243,208);
    }else{
      _doc.setFillColor(250,245,255);
      _doc.roundedRect(M,_y-4,W-M*2,13,3,3,"F");
      _doc.setDrawColor(196,181,253);
    }
    _doc.setLineWidth(0.3);
    _doc.roundedRect(M,_y-4,W-M*2,13,3,3,"S");

    // Accent bar sinistra
    if(_isDone){_doc.setFillColor(16,185,129);}else{_doc.setFillColor(124,58,237);}
    _doc.rect(M,_y-4,2,13,"F");

    // Numero
    _doc.setTextColor(196,181,253);
    _doc.setFontSize(7);
    _doc.setFont("helvetica","normal");
    _doc.text(String(_i+1).padStart(2,"0"),M+5,_y+4,{align:"center"});

    // Checkbox
    if(_isDone){
      _doc.setFillColor(16,185,129);
      _doc.roundedRect(M+12,_y-1,7,7,1.5,1.5,"F");
      _doc.setTextColor(255,255,255);
      _doc.setFontSize(6);
      _doc.text("✓",M+15.5,_y+4.2,{align:"center"});
    }else{
      _doc.setFillColor(255,255,255);
      _doc.roundedRect(M+12,_y-1,7,7,1.5,1.5,"F");
      _doc.setDrawColor(167,139,250);
      _doc.setLineWidth(0.5);
      _doc.roundedRect(M+12,_y-1,7,7,1.5,1.5,"S");
    }

    // Testo task
    _doc.setFontSize(9);
    _doc.setFont("helvetica",_isDone?"normal":"bold");
    _doc.setTextColor(_isDone?150:31,_isDone?150:41,_isDone?150:55);
    const _txt=_t.text.length>52?_t.text.substring(0,49)+"...":_t.text;
    _doc.text(_txt,M+23,_y+4);

    // Badge AI
    if(_t.isAi){
      const _bx=W-M-18;
      _doc.setFillColor(237,233,254);
      _doc.roundedRect(_bx,_y,16,6,3,3,"F");
      _doc.setTextColor(124,58,237);
      _doc.setFontSize(6);
      _doc.setFont("helvetica","bold");
      _doc.text("✦ AI",_bx+8,_y+4.2,{align:"center"});
    }

    // Strikethrough se completato
    if(_isDone){
      _doc.setDrawColor(196,181,253);
      _doc.setLineWidth(0.3);
      _doc.line(M+23,_y+2,M+23+Math.min(_txt.length*2.2,120),_y+2);
    }

    _y+=16;
  });

  // ── SEZIONE VUOTA ──
  if(_0xCT.length===0){
    _doc.setFillColor(250,245,255);
    _doc.roundedRect(M,_y,W-M*2,30,5,5,"F");
    _doc.setDrawColor(221,214,254);
    _doc.setLineWidth(0.4);
    _doc.roundedRect(M,_y,W-M*2,30,5,5,"S");
    _doc.setTextColor(167,139,250);
    _doc.setFontSize(10);
    _doc.setFont("helvetica","normal");
    _doc.text("Nessuna attività per questo giorno",W/2,_y+18,{align:"center"});
  }

  // ── FOOTER ──
  _doc.setFillColor(245,240,255);
  _doc.rect(0,H-16,W,16,"F");
  _doc.setDrawColor(221,214,254);
  _doc.setLineWidth(0.3);
  _doc.line(0,H-16,W,H-16);

  // Dot decorativi footer
  [[124,58,237],[236,72,153],[6,182,212]].forEach(([_r,_g,_b],_i)=>{
    _doc.setFillColor(_r,_g,_b);
    _doc.circle(M+_i*6,H-8,1.5,"F");
  });

  _doc.setTextColor(124,58,237);
  _doc.setFontSize(7);
  _doc.setFont("helvetica","bold");
  _doc.text("AI Smart To Do List",M+20,H-6);
  _doc.setTextColor(156,163,175);
  _doc.setFont("helvetica","normal");
  _doc.text(`Generato il ${new Date().toLocaleDateString("it-IT")}`,W/2,H-6,{align:"center"});
  _doc.setTextColor(196,181,253);
  _doc.text("© 2026 All rights reserved",W-M,H-6,{align:"right"});

  _doc.save(`todo-${_ds.replace(/ /g,"-")}.pdf`);
};

const _0xDIM=_0xf1(_0xY,_0xM);
const _0xFD=_0xf2(_0xY,_0xM);
const _0xCC2=[...Array(_0xFD).fill(null),...Array.from({length:_0xDIM},(_,_i)=>_i+1)];
const _0xPM=()=>{if(_0xM===0){_s0xM(11);_s0xY(_y=>_y-1);}else _s0xM(_m=>_m-1);_s0xD(1);};
const _0xNM=()=>{if(_0xM===11){_s0xM(0);_s0xY(_y=>_y+1);}else _s0xM(_m=>_m+1);_s0xD(1);};
const _0xDN=_0xCT.filter(_t=>_t.done).length;
const _0xTT=_0xCT.length;
const _0xPC=_0xTT?Math.round((_0xDN/_0xTT)*100):0;
const _0xiT=_d=>_d===_0xt.getDate()&&_0xM===_0xt.getMonth()&&_0xY===_0xt.getFullYear();
const _0xHT=_d=>{const _k=`${_0xY}-${_0xM+1}-${_d}`;return _0xTk[_k]&&_0xTk[_k].length>0;};

return(
<div style={{minHeight:"100vh",background:"linear-gradient(145deg,#FAF5FF 0%,#FDF2F8 30%,#F0FAFA 65%,#FAF5FF 100%)",fontFamily:"'Sora','Outfit','DM Sans',sans-serif",overflowX:"hidden",position:"relative"}}>
<style>{`
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&display=swap');
*{box-sizing:border-box;margin:0;padding:0;}
::-webkit-scrollbar{width:6px;}
::-webkit-scrollbar-track{background:#FAF5FF;}
::-webkit-scrollbar-thumb{background:#C4B5FD;border-radius:3px;}
@keyframes _fl{0%,100%{transform:translateY(0) rotate(0deg);}50%{transform:translateY(-20px) rotate(5deg);}}
@keyframes _sh{0%{background-position:-200% center;}100%{background-position:200% center;}}
@keyframes _su{from{opacity:0;transform:translateY(22px);}to{opacity:1;transform:translateY(0);}}
@keyframes _sp{to{transform:rotate(360deg);}}
@keyframes _pr{0%,100%{box-shadow:0 0 0 0 rgba(124,58,237,0.3),0 4px 20px rgba(124,58,237,0.2);}50%{box-shadow:0 0 0 6px rgba(124,58,237,0.07),0 4px 28px rgba(236,72,153,0.25);}}
@keyframes _cf{0%{transform:translateY(-10px) rotate(0deg);opacity:1;}100%{transform:translateY(100vh) rotate(720deg);opacity:0;}}
@keyframes _pf{from{width:0%;}to{width:var(--pct);}}
.card{background:rgba(255,255,255,0.78);border:1px solid rgba(196,181,253,0.25);border-radius:22px;backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);box-shadow:0 4px 24px rgba(124,58,237,0.08),0 1px 3px rgba(124,58,237,0.04);transition:all 0.3s ease;}
.card:hover{box-shadow:0 10px 40px rgba(124,58,237,0.13),0 2px 8px rgba(236,72,153,0.07);}
.bp{background:linear-gradient(135deg,#7C3AED,#EC4899);border:none;border-radius:13px;color:white;font-family:'Sora',sans-serif;font-weight:600;cursor:pointer;transition:all 0.25s ease;box-shadow:0 4px 18px rgba(124,58,237,0.28);}
.bp:hover{transform:translateY(-2px);box-shadow:0 8px 28px rgba(124,58,237,0.38);}
.ba{background:linear-gradient(135deg,#06B6D4,#6366F1);border:none;border-radius:13px;color:white;font-family:'Sora',sans-serif;font-weight:600;cursor:pointer;transition:all 0.25s ease;box-shadow:0 4px 18px rgba(6,182,212,0.28);}
.ba:hover{transform:translateY(-2px);box-shadow:0 8px 28px rgba(6,182,212,0.38);}
.ti{background:rgba(255,255,255,0.85);border:1px solid rgba(196,181,253,0.18);border-radius:14px;padding:13px 15px;transition:all 0.25s ease;animation:_su 0.35s ease forwards;box-shadow:0 2px 8px rgba(124,58,237,0.04);}
.ti:hover{background:rgba(245,240,255,0.95);border-color:rgba(167,139,250,0.4);transform:translateX(5px);box-shadow:0 4px 18px rgba(124,58,237,0.1);}
.cd{aspect-ratio:1;border-radius:10px;border:1.5px solid transparent;cursor:pointer;transition:all 0.18s ease;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:500;color:#6B7280;position:relative;}
.cd:hover{background:rgba(167,139,250,0.18);color:#7C3AED;transform:scale(1.1);}
.cd.sel{background:linear-gradient(135deg,#7C3AED,#EC4899);color:white;font-weight:700;animation:_pr 2s infinite;}
.cd.tdy:not(.sel){border-color:rgba(6,182,212,0.55);color:#0891B2;font-weight:600;background:rgba(6,182,212,0.07);}
.cd.htk::after{content:'';position:absolute;bottom:3px;width:4px;height:4px;border-radius:50%;background:#10B981;}
.im{background:rgba(255,255,255,0.92);border:1.5px solid rgba(196,181,253,0.35);border-radius:13px;color:#1F2937;font-family:'Sora',sans-serif;font-size:14px;transition:all 0.25s ease;outline:none;padding:12px 16px;width:100%;box-shadow:0 2px 8px rgba(124,58,237,0.05);}
.im::placeholder{color:#BDB5D5;}
.im:focus{border-color:rgba(124,58,237,0.5);background:white;box-shadow:0 0 0 3px rgba(124,58,237,0.09),0 2px 12px rgba(124,58,237,0.09);}
.pb{height:8px;border-radius:4px;background:rgba(196,181,253,0.2);overflow:hidden;}
.pf{height:100%;background:linear-gradient(90deg,#7C3AED,#EC4899,#06B6D4);background-size:200% 100%;animation:_sh 2.5s linear infinite,_pf 1s ease forwards;border-radius:4px;}
.sc{background:rgba(255,255,255,0.82);border:1px solid rgba(196,181,253,0.2);border-radius:18px;padding:18px 12px;text-align:center;transition:all 0.25s;box-shadow:0 2px 12px rgba(124,58,237,0.06);backdrop-filter:blur(12px);}
.sc:hover{transform:translateY(-4px);box-shadow:0 10px 30px rgba(124,58,237,0.12);}
.ab{display:inline-flex;align-items:center;gap:3px;background:linear-gradient(135deg,rgba(124,58,237,0.09),rgba(236,72,153,0.09));border:1px solid rgba(124,58,237,0.2);border-radius:20px;padding:2px 8px;font-size:10px;color:#7C3AED;font-weight:700;}
.orb{position:fixed;border-radius:50%;filter:blur(75px);opacity:0.22;pointer-events:none;z-index:0;animation:_fl 9s ease-in-out infinite;}
.pe{animation:_su 0.5s ease forwards;}
.sd1{animation:_su 0.5s ease 0.08s both;}
.sd2{animation:_su 0.5s ease 0.16s both;}
.sd3{animation:_su 0.5s ease 0.24s both;}
.cp{position:fixed;width:8px;height:8px;z-index:9999;pointer-events:none;border-radius:2px;animation:_cf 3s ease forwards;}
.cb{width:22px;height:22px;border-radius:7px;border:2px solid rgba(167,139,250,0.45);background:white;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all 0.2s;flex-shrink:0;box-shadow:0 1px 4px rgba(124,58,237,0.08);}
.cb.ck{background:linear-gradient(135deg,#7C3AED,#EC4899);border-color:transparent;box-shadow:0 3px 10px rgba(124,58,237,0.28);}
.cb:hover{border-color:#A78BFA;transform:scale(1.1);}
.ib{width:32px;height:32px;border-radius:8px;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all 0.2s;background:transparent;flex-shrink:0;}
.ib:hover{transform:scale(1.15);}
.ib.ed:hover{background:rgba(124,58,237,0.09);}
.ib.dl:hover{background:rgba(236,72,153,0.09);}
@media(max-width:768px){.mg{flex-direction:column!important;}}
`}</style>

<div className="orb" style={{width:520,height:520,background:"#C4B5FD",top:"-100px",left:"-100px",animationDelay:"0s"}}/>
<div className="orb" style={{width:420,height:420,background:"#FBCFE8",bottom:"60px",right:"-80px",animationDelay:"3.5s"}}/>
<div className="orb" style={{width:300,height:300,background:"#A5F3FC",top:"38%",left:"52%",animationDelay:"6s"}}/>
<div className="orb" style={{width:240,height:240,background:"#DDD6FE",top:"18%",right:"18%",animationDelay:"2s"}}/>

{_0xCC&&Array.from({length:30}).map((_,_i)=>(
<div key={_i} className="cp" style={{left:`${Math.random()*100}%`,top:"-10px",background:["#7C3AED","#EC4899","#06B6D4","#10B981","#A78BFA","#F9A8D4"][_i%6],animationDelay:`${Math.random()}s`,animationDuration:`${2+Math.random()*2}s`,transform:`rotate(${Math.random()*360}deg)`}}/>
))}

<div style={{position:"relative",zIndex:1,maxWidth:1200,margin:"0 auto",padding:"28px 20px"}}>

<div className="pe" style={{textAlign:"center",marginBottom:36}}>
<div style={{display:"inline-flex",alignItems:"center",gap:14,marginBottom:14}}>
<div style={{width:52,height:52,borderRadius:16,background:"linear-gradient(135deg,#7C3AED,#EC4899)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:26,boxShadow:"0 8px 28px rgba(124,58,237,0.3)"}}>⚡</div>
<div style={{textAlign:"left"}}>
<div style={{fontSize:11,letterSpacing:3,color:"#A78BFA",textTransform:"uppercase",fontWeight:700}}>AI Powered</div>
<h1 style={{fontSize:30,fontWeight:800,lineHeight:1.1,background:"linear-gradient(135deg,#7C3AED,#EC4899,#06B6D4)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundSize:"200% 100%",animation:"_sh 3s linear infinite"}}>Smart To Do List</h1>
</div>
</div>
<p style={{color:"#9CA3AF",fontSize:14,maxWidth:380,margin:"0 auto",fontWeight:400}}>Il tuo assistente AI per organizzare ogni giornata con intelligenza</p>
</div>

<div className="sd1" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:14,marginBottom:24}}>
{[{l:"Completati",v:_0xDN,i:"✓",c:"#059669",b:"rgba(16,185,129,0.08)"},{l:"Rimanenti",v:_0xTT-_0xDN,i:"○",c:"#7C3AED",b:"rgba(124,58,237,0.07)"},{l:"Completamento",v:`${_0xPC}%`,i:"◎",c:"#DB2777",b:"rgba(236,72,153,0.07)"}].map((_s,_i)=>(
<div key={_i} className="sc">
<div style={{width:38,height:38,borderRadius:11,background:_s.b,display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 10px",fontSize:17,color:_s.c,fontWeight:700}}>{_s.i}</div>
<div style={{fontSize:30,fontWeight:800,color:_s.c,lineHeight:1}}>{_s.v}</div>
<div style={{fontSize:11,color:"#9CA3AF",marginTop:5,fontWeight:500}}>{_s.l}</div>
</div>
))}
</div>

<div className="sd1" style={{marginBottom:30}}>
<div style={{display:"flex",justifyContent:"space-between",marginBottom:8}}>
<span style={{fontSize:12,color:"#9CA3AF",fontWeight:500}}>Progresso giornaliero</span>
<span style={{fontSize:12,color:"#7C3AED",fontWeight:700}}>{_0xPC}%</span>
</div>
<div className="pb"><div className="pf" style={{"--pct":`${_0xPC}%`,width:`${_0xPC}%`}}/></div>
</div>

<div className="mg" style={{display:"flex",gap:24,alignItems:"flex-start"}}>

<div className="sd2" style={{flex:"0 0 340px",minWidth:0}}>
<div className="card" style={{padding:24}}>
<div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:20}}>
{[["‹",_0xPM],["›",_0xNM]].map(([_lbl,_fn],_i)=>(
<button key={_i} onClick={_fn} style={{width:36,height:36,borderRadius:10,border:"1.5px solid rgba(196,181,253,0.3)",background:"rgba(245,240,255,0.8)",color:"#7C3AED",cursor:"pointer",fontSize:20,display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.2s"}}
onMouseEnter={_e=>_e.currentTarget.style.background="rgba(167,139,250,0.2)"}
onMouseLeave={_e=>_e.currentTarget.style.background="rgba(245,240,255,0.8)"}>{_lbl}</button>
))}
<div style={{textAlign:"center"}}>
<div style={{fontSize:16,fontWeight:700,color:"#1F2937"}}>{_0xm3[_0xM]}</div>
<div style={{fontSize:12,color:"#9CA3AF"}}>{_0xY}</div>
</div>
<div style={{width:36}}/>
</div>

<div style={{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4,marginBottom:8}}>
{_0xd7.map(_d=><div key={_d} style={{textAlign:"center",fontSize:10,fontWeight:700,color:"#C4B5FD",padding:"3px 0",textTransform:"uppercase",letterSpacing:0.5}}>{_d}</div>)}
</div>
<div style={{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4}}>
{_0xCC2.map((_d,_i)=>(
<div key={_i} onClick={()=>_d&&_s0xD(_d)}
className={`cd${_d===_0xD?" sel":""}${_d&&_0xiT(_d)?" tdy":""}${_d&&_0xHT(_d)?" htk":""}`}
style={{opacity:_d?1:0,pointerEvents:_d?"auto":"none"}}>{_d}</div>
))}
</div>
<div style={{marginTop:20,padding:"12px 16px",borderRadius:14,background:"linear-gradient(135deg,rgba(124,58,237,0.06),rgba(236,72,153,0.05))",border:"1px solid rgba(196,181,253,0.3)",textAlign:"center"}}>
<div style={{fontSize:11,color:"#A78BFA",marginBottom:3,fontWeight:600,textTransform:"uppercase",letterSpacing:1}}>Giorno selezionato</div>
<div style={{fontSize:15,fontWeight:700,color:"#1F2937"}}>{_0xD} {_0xm3[_0xM]} {_0xY}</div>
</div>
</div>

<div className="card" style={{padding:24,marginTop:20}}>
<div style={{display:"flex",alignItems:"center",gap:10,marginBottom:18}}>
<div style={{width:36,height:36,borderRadius:12,background:"linear-gradient(135deg,#7C3AED,#06B6D4)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:18,boxShadow:"0 4px 14px rgba(124,58,237,0.2)"}}>✦</div>
<div>
<div style={{fontSize:14,fontWeight:700,color:"#1F2937"}}>AI Daily Suggestions</div>
<div style={{fontSize:11,color:"#9CA3AF"}}>Generato per questo giorno</div>
</div>
</div>
{_0xAL?(
<div style={{textAlign:"center",padding:"24px 0"}}>
<div style={{width:34,height:34,border:"3px solid rgba(196,181,253,0.3)",borderTopColor:"#7C3AED",borderRadius:"50%",animation:"_sp 0.8s linear infinite",margin:"0 auto 12px"}}/>
<div style={{fontSize:12,color:"#A78BFA",fontWeight:500}}>Generando suggerimenti AI...</div>
</div>
):(
<div style={{display:"flex",flexDirection:"column",gap:8}}>
{_0xCT.filter(_t=>_t.isAi).map(_t=>(
<div key={_t.id} style={{display:"flex",alignItems:"center",gap:9,padding:"9px 12px",borderRadius:11,background:"rgba(245,240,255,0.85)",border:"1px solid rgba(196,181,253,0.25)"}}>
<span style={{color:"#A78BFA",fontSize:12}}>✦</span>
<span style={{fontSize:13,color:"#374151",flex:1,fontWeight:500}}>{_t.text}</span>
</div>
))}
<button onClick={_0xGA} style={{marginTop:6,padding:"9px",borderRadius:11,background:"rgba(6,182,212,0.06)",border:"1.5px solid rgba(6,182,212,0.25)",color:"#0891B2",fontSize:12,cursor:"pointer",fontFamily:"'Sora',sans-serif",fontWeight:600,transition:"all 0.2s"}}
onMouseEnter={_e=>_e.currentTarget.style.background="rgba(6,182,212,0.12)"}
onMouseLeave={_e=>_e.currentTarget.style.background="rgba(6,182,212,0.06)"}>↻ Rigenera suggerimenti</button>
</div>
)}
</div>
</div>

<div className="sd3" style={{flex:1,minWidth:0}}>
<div className="card" style={{padding:26}}>
<div style={{display:"flex",alignItems:"center",gap:12,marginBottom:22}}>
<div style={{width:36,height:36,borderRadius:12,background:"linear-gradient(135deg,#EC4899,#7C3AED)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:18,boxShadow:"0 4px 14px rgba(236,72,153,0.22)"}}>📋</div>
<div>
<div style={{fontSize:17,fontWeight:700,color:"#1F2937"}}>Le tue attività</div>
<div style={{fontSize:11,color:"#9CA3AF"}}>{_0xTT} task per oggi</div>
</div>
</div>
<div style={{display:"flex",gap:10,marginBottom:20}}>
<input className="im" placeholder="Aggiungi una nuova attività..." value={_0xNT} onChange={_e=>_s0xNT(_e.target.value)} onKeyDown={_e=>_e.key==="Enter"&&_0xAT()} style={{flex:1}}/>
<button className="bp" onClick={_0xAT} style={{padding:"12px 20px",fontSize:13,whiteSpace:"nowrap"}}>+ Aggiungi</button>
</div>
<div style={{display:"flex",flexDirection:"column",gap:8,minHeight:200}}>
{_0xCT.length===0&&!_0xAL&&(
<div style={{textAlign:"center",padding:"44px 20px"}}>
<div style={{fontSize:44,marginBottom:14}}>✨</div>
<div style={{fontSize:14,color:"#9CA3AF",fontWeight:500}}>Nessuna attività per questo giorno</div>
<div style={{fontSize:12,color:"#C4B5FD",marginTop:4}}>Aggiungi un task o aspetta i suggerimenti AI</div>
</div>
)}
{_0xCT.map((_t,_i)=>(
<div key={_t.id} className="ti" style={{animationDelay:`${_i*0.05}s`}}>
<div style={{display:"flex",alignItems:"center",gap:12}}>
<div className={`cb${_t.done?" ck":""}`} onClick={()=>_0xTG(_t.id)}>
{_t.done&&<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6L5 9L10 3" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
</div>
{_0xEI===_t.id?(
<input className="im" value={_0xET} onChange={_e=>_s0xET(_e.target.value)} onKeyDown={_e=>{if(_e.key==="Enter")_0xSV(_t.id);if(_e.key==="Escape")_s0xEI(null);}} autoFocus style={{flex:1,padding:"7px 12px"}}/>
):(
<div style={{flex:1,display:"flex",alignItems:"center",gap:8}}>
<span style={{fontSize:14,color:_t.done?"#C4B5FD":"#374151",textDecoration:_t.done?"line-through":"none",transition:"all 0.3s",fontWeight:500}}>{_t.text}</span>
{_t.isAi&&<span className="ab">✦ AI</span>}
</div>
)}
<div style={{display:"flex",gap:4}}>
{_0xEI===_t.id?(
<>
<button className="ib ed" onClick={()=>_0xSV(_t.id)}><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7L5.5 10.5L12 3.5" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></button>
<button className="ib dl" onClick={()=>_s0xEI(null)}><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 3L11 11M11 3L3 11" stroke="#EC4899" strokeWidth="2" strokeLinecap="round"/></svg></button>
</>
):(
<>
<button className="ib ed" onClick={()=>_0xSE(_t)}><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9.5 2.5L11.5 4.5L5 11H3V9L9.5 2.5Z" stroke="#A78BFA" strokeWidth="1.5" strokeLinejoin="round"/></svg></button>
<button className="ib dl" onClick={()=>_0xDT(_t.id)}><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 4H12M5 4V2.5H9V4M4.5 4.5L5 11.5H9L9.5 4.5" stroke="#EC4899" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></button>
</>
)}
</div>
</div>
</div>
))}
</div>
{_0xTT>0&&(
<div style={{marginTop:24,display:"flex",gap:12,flexWrap:"wrap"}}>
{!_0xCf?(
<button className="bp" onClick={_0xCL} style={{flex:1,padding:"14px 24px",fontSize:14,minWidth:160}}>✓ Conferma Lista</button>
):(
<div style={{flex:1,padding:"14px 24px",borderRadius:13,textAlign:"center",background:"rgba(16,185,129,0.08)",border:"1.5px solid rgba(16,185,129,0.28)",color:"#059669",fontSize:14,fontWeight:700}}>✓ Lista confermata!</div>
)}
{_0xPR&&(
<button className="ba" onClick={_0xPDF} style={{flex:1,padding:"14px 24px",fontSize:14,minWidth:160}}>📄 Crea PDF To Do List</button>
)}
</div>
)}
</div>

<div style={{marginTop:20,padding:"18px 24px",borderRadius:18,background:"linear-gradient(135deg,rgba(124,58,237,0.06),rgba(6,182,212,0.05))",border:"1.5px solid rgba(196,181,253,0.25)",display:"flex",alignItems:"center",gap:14,boxShadow:"0 4px 18px rgba(124,58,237,0.06)"}}>
<div style={{fontSize:30}}>🚀</div>
<div>
<div style={{fontSize:14,fontWeight:700,color:"#1F2937"}}>
{_0xPC>=100?"Giornata completata! Sei incredibile! 🎉":_0xPC>=50?"Ottimo lavoro! Sei a metà strada! 💪":_0xPC>0?"Stai andando alla grande! Continua così! ⚡":"Inizia la tua giornata produttiva! ✨"}
</div>
<div style={{fontSize:11,color:"#9CA3AF",marginTop:3}}>
AI Smart To Do List • {new Date().toLocaleDateString("it-IT",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}
</div>
</div>
</div>
</div>
</div>
</div>
</div>
);
}