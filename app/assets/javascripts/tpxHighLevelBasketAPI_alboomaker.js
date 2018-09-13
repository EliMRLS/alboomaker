/*
Taopix Multi Line Basket API Example
Version 1.4.0 - Friday, 15th July 2016
Copyright 2011 - 2016 Taopix Limited
*/

var kServerURL = 'http://alboomaker.alboomaker.com'; // kServerURL needs to be set to the weburl for the corresponding brand in Taopix Control Centre.
var gBasketCount = 0;
var gBasketLoaded = false;
var gProjectListLoaded = false;
var gProjectListCount = 0;

var kStr_LabelMyProjects = "en My Projects<p>cs Moje projekty<p>da Mine projekter<p>de Meine Projekte<p>es Mis Proyectos<p>fi Omat projektit<p>fr Mes projets<p>it I Miei Progetti<p>ja マイプロジェクト<p>ko 내 프로젝트<p>nl Mijn projecten<p>no Mine prosjekter<p>pl Moje projekty<p>pt Meus projetos<p>ru Мои проекты<p>sv Mina projekt<p>th โปรเจ็คของฉัน<p>zh_cn 我的项目<p>zh_tw 我的項目";
var kStr_LabelBasket = "en Basket<p>cs Košík<p>da Indkøbskurv<p>de Warenkorb<p>es Carrito<p>fi Kori<p>fr Panier<p>it Carrello<p>ja バスケット<p>ko 장바구니<p>nl Winkelmandje<p>no Handlekurv<p>pl Koszyk<p>pt Carrinho<p>ru Корзина<p>sv Korg<p>th ตะกร้า<p>zh_cn 购物车<p>zh_tw 購物車";
var kStr_LabelRemoveFromBasket = "en Remove From Basket<p>cs Vyjmout z košíku<p>da Fjern fra indkøbskurv<p>de aus dem Warenkorb entfernen<p>es Eliminar del Carrito<p>fi Poista korista<p>fr Supprimer du panier<p>it Rimuovi Dal Carrello<p>ja バスケットから削除する<p>ko 장바구니에서 삭제<p>nl Uit winkelmandje verwijderen<p>no Fjern fra handlekurv<p>pl Usuń z koszyka<p>pt Remover do carrinho<p>ru Удалить из корзины<p>sv Ta bort från korg<p>th ลบออกจากตะกร้า<p>zh_cn 从购物车删除<p>zh_tw 從購物車刪除";
var kStr_ButtonEmptyBasket = "en Empty Basket<p>cs Prázdný košík<p>da Tøm indkøbskurv<p>de leerer Warenkorb<p>es Vaciar Carrito<p>fi Tyhjenn kori<p>fr Vider le panier<p>it Svuota Carrello<p>ja バスケットを空にする<p>ko 빈 장바구니<p>nl Winkelmandje legen<p>no Tøm handlekurv<p>pl Pusty koszyk<p>pt Esvaziar carrinho<p>ru Очистить корзину<p>sv Töm korg<p>th ล้างตะกร้า<p>zh_cn 清空购物车<p>zh_tw 清空購物車";
var kStr_ButtonCheckout = "en Checkout<p>cs Pokladna<p>da Til kassen<p>de Abmelden<p>es Finalizar Compra<p>fi Kassa<p>fr Paiement<p>it Procedi<p>ja チェックアウト<p>ko 점검<p>nl Afrekenen<p>no Gå til kassen<p>pl Zamów<p>pt Finalizar pedido<p>ru Оформить заказ<p>sv Gå till kassan<p>th เช็คเอ้าท์<p>zh_cn 结账<p>zh_tw 結賬";
var kStr_LabelSignIn = "en Sign In<p>cs Přihlásit<p>da Log på<p>de Anmelden<p>es Registrarse<p>fi Kirjaudu<p>fr Connectez-vous<p>it Accedere<p>ja サインイン<p>ko 로그인<p>nl Aanmelden<p>no Logg inn<p>pl Zaloguj<p>pt Entre<p>ru Вход<p>sv Logga in<p>th เข้าสู่ระบบ<p>zh_cn 登录<p>zh_tw 登入";
var kStr_LabelLogout = "en Log Out<p>cs Odhlásit<p>da Log af<p>de Abmelden<p>es Salir<p>fi Kirjaudu ulos<p>fr Déconnexion<p>it Log Out<p>ja ログアウト<p>ko 로그 아웃<p>nl Uitloggen<p>no Logg ut<p>pl Wyloguj<p>pt Logout<p>ru Выйти<p>sv Logga ut<p>th ออกจากระบบ<p>zh_cn 退出<p>zh_tw 登出";
var kStr_LabelEdit = "en Edit<p>cs Editovat<p>da Rediger<p>de Bearbeiten<p>es Editar<p>fi Muokkaa<p>fr Editer<p>it Modificare<p>ja 編集<p>ko 편집<p>nl Bewerken<p>no Endre<p>pl Edytuj<p>pt Editar<p>ru Редактировать<p>sv Redigera<p>th แก้ไข<p>zh_cn 编辑<p>zh_tw 編輯";
var kStr_LabelRename = "en Rename<p>cs Přejmenovat<p>da Omdøb<p>de Umbenennen<p>es Renombrar<p>fi Nimeä uudelleen<p>fr Renommer<p>it Rinomina<p>ja リネーム<p>ko 이름 바꾸기<p>nl Hernoem project<p>no Rename<p>pl Zmień nazwę<p>pt Renomear<p>ru Переименовать<p>sv Byt namn<p>th เปลี่ยนชื่อ<p>zh_cn 重命名<p>zh_tw 重命名";
var kStr_LabelDuplicate = "en Duplicate<p>cs Duplikovat<p>da Dupliker<p>de Duplizieren<p>es Duplicar<p>fi Monista<p>fr Dupliquer<p>it Duplica<p>ja 複製<p>ko 중복<p>nl Dupliceer project<p>no Duplicate<p>pl Powiel<p>pt Duplicar<p>ru Дублировать<p>sv Kopiera<p>th ทำซ้ำ<p>zh_cn 复制<p>zh_tw 複製";
var kStr_LabelDelete = "en Delete<p>cs Smazat<p>da Slet<p>de Löschen<p>es Borrar<p>fi Poista<p>fr Supprimer<p>it Cancella<p>ja 削除<p>ko 삭제<p>nl Verwijder project<p>no Delete<p>pl Usuń<p>pt Deletar<p>ru Удалить<p>sv Ta bort<p>th ลบ<p>zh_cn 删除<p>zh_tw 刪除";
var kStr_LabelLayoutName = "en Layout Name<p>cs Název layoutu<p>da Layoutnavn<p>de LayoutName<p>es Nombre de plantilla<p>fi Asettelun nimi<p>fr Nom de mise en page<p>it Nome Layout<p>ja レイアウト名<p>ko 레이아웃명<p>nl Layout naam<p>no Layout-navn<p>pl Nazwa szablonu<p>pt Nome do layout<p>ru Имя макета<p>sv Layoutnamn<p>th ชื่อเลย์เอาท์<p>zh_cn 模板名字<p>zh_tw 模板名字";
var kStr_LabelMyAccount = "en My Account<p>cs Můj účet<p>da Min konto<p>de Mein Konto<p>es Mi Cuenta<p>fi Oma tili<p>fr Mon compte<p>it Il Mio Account<p>ja マイアカウント<p>ko 마이 페이지<p>nl Mijn account<p>no Min konto<p>pl Moje konto<p>pt Minha Conta<p>ru Моя учетная запись<p>sv Mitt konto<p>th บัญชีของฉัน<p>zh_cn 我的账号<p>zh_tw 我的帳戶";
var kStr_LabelRegister = "en Register<p>cs Registrovat<p>da Registrer<p>de Registrieren<p>es Registro<p>fi Rekisteröidy<p>fr S'enregistrer<p>it Registrazione<p>ja 登録<p>ko 회원가입<p>nl Registreer<p>no Registrer deg<p>pl Rejestracja<p>pt Registrar<p>ru Зарегистрироваться<p>sv Registrera<p>th ลงทะเบียน<p>zh_cn 注册<p>zh_tw 註冊";
var kStr_LabelRenameProject = "en Rename Project<p>cs Přejmenovat projekt<p>da Omdøb projekt<p>de Projekt umbenennen<p>es Cambiar el nombre de Proyecto<p>fi Nimeä projekti uudelleen<p>fr Renommer le projet<p>it Rinomina il Progetto<p>ja プロジェクト名をリネーム<p>ko 이름 바꾸기<p>nl Project hernoemen<p>no Gi nytt navn til prosjekt<p>pl Zmiana nazwy projektu<p>pt Renomear projeto<p>ru Переименовать проект<p>sv Byt namn på projekt<p>th เปลี่ยนชื่อโปรเจ็ค<p>zh_cn 重命名作品<p>zh_tw 重命名作品";
var kStr_LabelProjectName = "en Project Name<p>cs Název projektu<p>da Projektnavn<p>de Projektname<p>es Nombre del Proyecto<p>fi Projektin nimi<p>fr Nom du projet<p>it Nome Del Progetto<p>ja プロジェクト名<p>ko 프로젝트 이름<p>nl Projectnaam<p>no Prosjektnavn<p>pl Nazwa projektu<p>pt Nome do projeto<p>ru Название проекта<p>sv Projektnamn<p>th ชื่องาน<p>zh_cn 作品名称<p>zh_tw 作品名稱";
var kStr_ButtonDoNotContinue = "en Do Not Continue<p>cs Nepokračovat<p>da Fortsæt ikke<p>de Nicht Weiter<p>es No Continuar<p>fi Älä jatka<p>fr Abandonner<p>it Interrompere<p>ja 続けない<p>ko 진행 중단<p>nl Ga niet verder<p>no Ikke fortsett<p>pl Nie kontynuuj<p>pt Não continuar<p>ru Не продолжать<p>sv Fortsätt inte<p>th ห้ามดำเนินการต่อ<p>zh_cn 不继续<p>zh_tw 不繼續";
var kStr_ButtonContinue = "en Continue<p>cs Pokračovat<p>da Fortsæt<p>de Weiter<p>es Continuar<p>fi Jatka<p>fr Continuer<p>it Continuare<p>ja 続ける<p>ko 계속 진행<p>nl Ga verder<p>no Fortsett<p>pl Kontynuuj<p>pt Continuar<p>ru Продолжить<p>sv Fortsätt<p>th ต่อไป<p>zh_cn 下一步<p>zh_tw 繼續";
var kStr_LabelPleaseConfirm = "en Please Confirm!<p>cs Potvrďte prosím!<p>da Bekræft!<p>de Bitte bestätigen<p>es ¡Confirme por favor!<p>fi Ole hyvä ja vahvista!<p>fr Merci de confirmer !<p>it Confermare!<p>ja 確認してください!<p>ko 확인해주세요!<p>nl Bevestig deze actie<p>no Please Confirm!<p>pl Potwierdzenie usunięcia<p>pt Favor confirmar!<p>ru Пожалуйста подтвердите!<p>sv Bekräfta.<p>th กรุณายืนยัน!<p>zh_cn 请确认<p>zh_tw 請確認";
var kStr_ButtonYes = "en Yes<p>cs Ano<p>da Ja<p>de Ja<p>es Sí<p>fi Kyllä<p>fr Oui<p>it Si<p>ja はい<p>ko 예<p>nl Ja<p>no Ja<p>pl Tak<p>pt Sim<p>ru Да<p>sv Ja<p>th ใช่<p>zh_cn 是<p>zh_tw 是";
var kStr_ButtonNo = "en No<p>cs Ne<p>da Nej<p>de Nein<p>es No<p>fi Ei<p>fr Non<p>it No<p>ja いいえ<p>ko 아니오<p>nl Nee<p>no Nei<p>pl Nie<p>pt Não<p>ru Нет<p>sv Nej<p>th ไม่ใช่<p>zh_cn 否<p>zh_tw 否";
var kStr_ButtonCancel = "en Cancel<p>cs Storno<p>da Anuller<p>de Abbrechen<p>es Cancelar<p>fi Peruuta<p>fr Annuler<p>it Annullare<p>ja キャンセル<p>ko 취소<p>nl Annuleren<p>no Avbryt<p>pl Anuluj<p>pt Cancelar<p>ru Отмена<p>sv Avbryt<p>th ยกเลิก<p>zh_cn 取消<p>zh_tw 取消";
var kStr_ButtonOK = "en OK<p>cs OK<p>da OK<p>de OK<p>es OK<p>fi OK<p>fr OK<p>it OK<p>ja OK<p>ko 좋습니다<p>nl OK<p>no OK<p>pl OK<p>pt OK<p>ru Окей<p>sv OK<p>th ตกลง<p>zh_cn 确定<p>zh_tw 確定";
var kStr_MessageDeleteProjectConfirmation = "en Are you sure you want to delete ^0?<p>cs Skutečně chcete odstranit ^0?<p>da Er du sikker på, at du vil slette ^0?<p>de Sind Sie sicher, dass Sie dieses Projekt löschen wollen: ^0?<p>es ¿Seguro que quieres eliminar ^0?<p>fi Haluatko varmasti poistaa seuraavan: ^0?<p>fr Etes-vous sûr de vouloir supprimer ^0 ?<p>it Vuoi veramente cancellare ^0?<p>ja ^0を本当に削除しますか？<p>ko 정말 ^0 프로젝트를 삭제하시겠습니까?<p>nl Weet je zeker dat je ^0 wilt verwijderen?<p>no Are you sure you want to delete ^0?<p>pl Jesteś pewien, że chcesz usunąć projekt: ^0?<p>pt Está seguro que deseja deletar ^0?<p>ru Вы уверены, что хотите удалить ^0?<p>sv Är du säker på att du vill ta bort ^0?<p>th คุณต้องการลบโปรเจ็ค^0?<p>zh_cn 您确认您要删除^0吗?<p>zh_tw 您確定您要刪除嗎^0";
var kSSOOff = 0;
var kSSOSignIn = 1;
var kSSOAutomatic = 2;

var gSSOEnabled = kSSOOff;
var gSSOToken = '';

function tpxGetBrowserLocale()
{
	// determine the browser locale either from the browser
	var browserLanguage = '';

	// get the first (main) browser language
	var browserLanguageArray = navigator.language.split(",");
	browserLanguage = browserLanguageArray[0].toLowerCase();

	switch (browserLanguage)
	{
		case 'zh-tw':
		case 'zh-cn':
		{
			// don't do anything if the language is set to Chinese as we need to detect
			// if it is Chinese Traditional or Chinese Simplified

			break;
		}
		default:
		{
			// if the language code is longer than 2 characters (i.e en-GB) then
			// we only need the first 2 characters (en) for the language code

			if (browserLanguage.length > 2)
			{
				browserLanguage = browserLanguage.substring(0, 2);
			}
			break;
		}
	}

	// still no language code? use the system's default language
	if (browserLanguage == '')
	{
		browserLanguage = 'en';
	}

	return browserLanguage.replace('-', '_');
}

function tpxGetUrlVar(key)
{
	var result = new RegExp(key + "=([^&]*)", "i").exec(window.location.search);
	return result && unescape(result[1]) || "";
}

function tpxGetLocaleString(pLocalizedString)
{
	// return the correct language string
	var result = '';
	var firstAvailable = '';
	var defaultLanguage = '';

	var locale = tpxGetBrowserLocale();

	var locale2 = locale.substring(0, 2);

	var localizedStringList = pLocalizedString.split('<p>');
	var localizedCount = localizedStringList.length;

	for (var i = 0; i < localizedCount; i++)
	{
		// split each language item into its code and name
		var charPos = localizedStringList[i].indexOf(' ');
		var localizedItemCode = localizedStringList[i].substring(0, charPos);
		var localizedItemCode2 = localizedItemCode.substring(0, 2);
		var localizedItemString = localizedStringList[i].substring(charPos + 1);

		if ((firstAvailable == '') && (localizedItemString != ''))
		{
			firstAvailable = localizedItemString;
		}

		if (localizedItemCode == 'en')
		{
			defaultLanguage = localizedItemString;
		}

		// check for english as a last resort
		// if not chinese, attempt to match based on the first two characters to handle regions
		// if we get an exact match on the full language code or the first two characters of the input code we always use this one
		if ((result == '') && (localizedItemCode2 == 'en'))
		{
			result = localizedItemString;
		}
		else if ((localizedItemCode2 == locale2) && (locale2 != 'zh'))
		{
			result = localizedItemString;
		}
		else if (localizedItemCode == locale)
		{
			result = localizedItemString;
			break;
		}
		else if (localizedItemCode == locale2)
		{
			result = localizedItemString;
			break;
		}
	}

	if (result == '')
	{
		if (defaultLanguage != '')
		{
			result = defaultLanguage;
		}
		else
		{
			result = firstAvailable;
		}
	}

	return result;
}

function tpxGetXMLHTTP()
{
   	var xhttp;

	if (window.XMLHttpRequest)
	{
		xhttp = new XMLHttpRequest();
	}
	else
	{
		// code for IE6, IE5
		xhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}

    return xhttp;
}

function tpxReadCookie(pName)
{
	var nameEQ = pName + "=";
	var ca = document.cookie.split(";");
	for (var i = 0;i < ca.length; i++)
	{
		var c = ca[i];
		while (c.charAt(0) == ' ')
		{
			c = c.substring(1, c.length);
		}

		if (c.indexOf(nameEQ) == 0)
		{
			return c.substring(nameEQ.length, c.length);
		}
	}

	return null;
}


function tpxCreateCookie(name, value, expires)
{
	document.cookie = name + "=" + value + "; expires=" + expires + "; path=/";
}

function tpxDeleteCookie(name)
{
	tpxCreateCookie(name, null, "Thu, 01 Jan 1970 00:00:00 UTC");
}

function tpxGenerateID()
{
	var result = '';
	var date = new Date();
	var timeStamp = String(date.getTime());
	var len = timeStamp.length;
	var charCode = 0;

	for (var i = 0; i < len; i++)
  	{
    	charCode = timeStamp.charCodeAt(i);
    	result += 138 - charCode - i;
  	}

  return result;
}

function tpxCreateMAWHLUIDCookie()
{
	var date = new Date();
	date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000));
	var value = tpxGenerateID();

	tpxCreateCookie("mawhluid", value, date.toGMTString());
}

function tpxIsEmpty(obj)
{
    return (Object.getOwnPropertyNames(obj).length === 0);
}

function tpxParamString(pSourceString)
{
    var args = arguments;

    for(var i = 0; i < arguments.length; i++)
    {
        pSourceString = pSourceString.replace("^" + String(i-1), args[i]);
    }

    return pSourceString;
}

function tpxCreateRandomString(pLength)
{
    return Math.round((Math.pow(36, pLength + 1) - Math.random() * Math.pow(36, pLength))).toString(36).slice(1);
}

function tpxAddGETParam(pURL, pKey, pValue)
{
	var connector = "?";

	if (/[?&]/.test(pURL))
	{
		connector = "&";
	}

	return pURL += connector + pKey + "=" + pValue;
}

function tpxHighLevelProcessRequest(pRequestFunction, pSetCookie, pParams, pSSOParams)
{
	var serverPage = '';
	var fsAction = '';
	var callback = '';
	var requestMethod = 'POST';
	var performRequest = true;
	var theDate = new Date();
	var timestamp = Math.round((theDate.getTime()) / 1000);
	var basketRef = '';
	var mawID = 0;
	var mawIDLookup = tpxReadCookie('mawhluid');
	var basketRefLookUpValue = tpxReadCookie('mawebhlbr');

	// if the unique high level cookie has not been created then we must create it.
    if ((mawIDLookup != null) || (mawIDLookup != ''))
    {
    	mawID = mawIDLookup;
    }

	if ((basketRefLookUpValue != null) && (basketRefLookUpValue != ''))
	{
		basketRef = basketRefLookUpValue;
	}

	if ((gSSOEnabled != kSSOOff) && (pSetCookie))
	{
		var cookieData = pRequestFunction + "|" + JSON.stringify(pParams);

		tpxCreateCookie("mawssoa", cookieData, "Fri, 31 Dec 9999 23:59:59 GMT");

	}

	switch (pRequestFunction)
	{
		case 'tpxHighLevelCheckUserSessionControl':
			fsAction = '?fsaction=OnlineAPI.checkUserSession';
			callback = tpxHighLevelCheckUserSessionView;
		break;
		case 'tpxHighLevelCreateProjectControl':
			requestMethod = 'GET';
			callback = tpxHighLevelCreateProjectView;
			fsAction = '?fsaction=OnlineAPI.createProject3&' + pParams['id'] + '&ssoenabled=' + pParams['ssoenabled'] + '&mawebhlbr=' + basketRef + '&prtz=' + timestamp + '&l=' + tpxGetBrowserLocale();
		break;
		case 'tpxHighLevelEditProjectControl':
			fsAction = '?fsaction=OnlineAPI.hlEditProject';
			callback = tpxHighLevelEditProjectView;
		break;
		case 'tpxHighLevelDuplicateProjectControl':
			fsAction = '?fsaction=OnlineAPI.hlDuplicateProject';
			callback = tpxHighLevelDuplicateProjectView;
		break;
		case 'tpxHighLevelRenameProjectControl':
			fsAction = '?fsaction=OnlineAPI.hlRenameProject';
			callback = tpxHighLevelRenameProjectView;
		break;
		case 'tpxHighLevelDeleteProjectControl':
			fsAction = '?fsaction=OnlineAPI.hlDeleteProject';
			callback = tpxHighLevelDeleteProjectView;
		break;
		case 'tpxHighLevelGetBasketContentsControl':
			fsAction = '?fsaction=OnlineAPI.basketInit';
			callback = tpxHighLevelGetBasketContentsView;

			if (gBasketLoaded)
			{
				performRequest = false
			}

		break;
		case 'tpxHighLevelGetProjectListControl':
			fsAction = '?fsaction=OnlineAPI.hlViewProjectsList';
			callback = tpxHighLevelGetProjectListView;

			if (gProjectListLoaded)
			{
				performRequest = false
			}

		break;
		case 'tpxHighLevelEmptyBasketControl':
			fsAction = '?fsaction=OnlineAPI.emptyBasket';
			callback = tpxHighLevelEmptyBasketView;
		break;
		case 'tpxHighLevelRemoveItemFromBasketControl':
			fsAction = '?fsaction=OnlineAPI.removeItemFromBasket';
			callback = tpxHighLevelRemoveItemFromBasketView;
		break;
		case 'tpxHighLevelCheckoutControl':
			fsAction = '?fsaction=OnlineAPI.checkout';
			callback = tpxHighLevelCheckoutView;
		break;
		case 'tpxHighLevelSignInInitControl':
		case 'tpxHighLevelSignInInitControl2':
			fsAction = '?fsaction=OnlineAPI.signInInit';

			if (pRequestFunction == 'tpxHighLevelSignInInitControl')
			{
				callback = tpxHighLevelSignInInitView;
			}
			else
			{
				callback = tpxHighLevelCheckUserSessionView;
			}

		break;
		case 'tpxHighLevelRegisterInitControl':
			fsAction = '?fsaction=OnlineAPI.registerInit';
			callback = tpxHighLevelRegisterInitView;
		break;
		case 'tpxHighLevelMyAccountInitControl':
			fsAction = '?fsaction=OnlineAPI.myAccountInit';
			callback = tpxHighLevelMyAccountInitView;
		break;
		case 'tpxHighLevelLogoutControl':
			fsAction = '?fsaction=OnlineAPI.hlLogout';
			callback = tpxHighLevelLogoutView;
		break;
	}

	serverPage = kServerURL + fsAction;

	for (var key in pSSOParams)
	{
		serverPage = tpxAddGETParam(serverPage, key, encodeURIComponent(pSSOParams[key]));
	}

    if (performRequest)
    {
		/* get an XMLHttpRequest object for use */
		/* make xmlhttp local so we can run simlutaneous requests */
		var xmlhttp = tpxGetXMLHTTP();

		if (requestMethod == 'POST')
		{
			pParams['mawebhluid'] = mawID;
			pParams['mawebhlbr'] = basketRef;
			pParams['prtz'] = timestamp;
			pParams['browserlocale'] = tpxGetBrowserLocale();
			pParams['ssotoken'] = gSSOToken;

			xmlhttp.open('POST', serverPage, false);
			xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");

			var postParams = '';

			for (var key in pParams)
			{
				postParams += '&' + key + '=' + encodeURIComponent(pParams[key]);
			}
		}
		else
		{
			serverPage = tpxAddGETParam(serverPage, 'dummy', new Date().getTime());
			serverPage = tpxAddGETParam(serverPage, 'ssotoken', gSSOToken);

			xmlhttp.open("GET", serverPage, true);
		}

		xmlhttp.onreadystatechange = function()
		{
			if ((xmlhttp.readyState == 4) && (xmlhttp.status == 200))
			{
				var responseObj = JSON.parse(xmlhttp.responseText);

				switch (pRequestFunction)
				{
					case 'tpxHighLevelSignInInitControl':

						if (responseObj.result == -2)
						{
							// set basketcookie based of the token
							basketRef = responseObj.basketref;
							basketCookieExpiryTime = responseObj.basketcookieexpirytime;
							userCookieExpiryTime = responseObj.usercookieexpirytime;

							var date = new Date();
							date.setTime(basketCookieExpiryTime * 1000);

							tpxCreateCookie("mawebhlbr", basketRef, date.toGMTString());

							var date = new Date();
							date.setTime(userCookieExpiryTime * 1000);

							tpxCreateCookie("mawuli", 1, date.toGMTString());

							gSSOToken = responseObj.ssotoken;

							gBasketCount = 0;
							gBasketLoaded = false;
							gProjectListLoaded = false;
							gProjectListCount = 0;

						}
					break;
					case 'tpxHighLevelSignInInitControl2':
					case 'tpxHighLevelCheckUserSessionControl':

						if (responseObj.result == 0)
						{
							// set basketcookie based of the token
							basketRef = responseObj.basketref;
							basketCookieExpiryTime = responseObj.basketcookieexpirytime;
							userCookieExpiryTime = responseObj.usercookieexpirytime;

							var date = new Date();
							date.setTime(basketCookieExpiryTime * 1000);

							tpxCreateCookie("mawebhlbr", basketRef, date.toGMTString());

							var date = new Date();
							date.setTime(userCookieExpiryTime * 1000);

							tpxCreateCookie("mawuli", 1, date.toGMTString());

							tpxHighLevelLoggedInStatusCallBack(1);

							gSSOToken = responseObj.ssotoken;
						}
						else if ((responseObj.result == -1) || (responseObj.result > 0))
						{
							tpxDeleteCookie("mawuli");

							if (((tpxGetUrlVar('odlo') == 1) && (responseObj.result == -1)) || (responseObj.result > 0) || ((responseObj.result == -1) && (gSSOEnabled != kSSOOff)))
							{
								tpxDeleteCookie("mawebhlbr");
							}
						}
						else if (responseObj.result == -2)
						{
							document.location = responseObj.ssoredirect;
						}

					break;
					case 'tpxHighLevelCreateProjectControl':

						if (responseObj.result == 0)
						{
							basketRef = responseObj.basketref;
							cookieExpiryTime = responseObj.cookieexpirytime;

							var date = new Date();
							date.setTime(cookieExpiryTime * 1000);

							tpxCreateCookie("mawebhlbr", basketRef, date.toGMTString());
						}

						break;
					case 'tpxHighLevelGetBasketContentsControl':
							gBasketLoaded = true;
							gBasketCount = responseObj.basketcount;

						break;
					case 'tpxHighLevelGetProjectListControl':
							gProjectListLoaded = true;
							gProjectListCount = responseObj.basketcount;

						break;
					case 'tpxHighLevelLogoutControl':

						tpxDeleteCookie("mawuli");
						tpxDeleteCookie("mawebhlbr");

						gBasketCount = 0;
						gProjectListCount = 0;

					break;
					case 'tpxHighLevelCheckoutControl':
						if (responseObj.result != 0)
						{
							tpxDeleteCookie("mawuli");
							tpxDeleteCookie("mawebhlbr");

							gBasketCount = 0;
							gProjectListCount = 0;
						}

						break;
					case 'tpxHighLevelEditProjectControl':

						if ((responseObj.result != 0) && (responseObj.ssoerror))
						{
							tpxDeleteCookie("mawuli");
							tpxDeleteCookie("mawebhlbr");

							gBasketCount = 0;
							gProjectListCount = 0;
						}

						break;
					case 'tpxHighLevelRemoveItemFromBasketControl':
						if (gBasketCount > 0)
						{
							gBasketCount--;
						}

						gProjectListLoaded = false;

					break;
					case 'tpxHighLevelEmptyBasketControl':
						gBasketCount = 0;
						gProjectListLoaded = false;
					break;
				}

				if (pRequestFunction == 'tpxHighLevelRenameProjectControl')
				{
					callback(responseObj, pParams['fromprojectlist']);
				}
				else
				{
					callback(responseObj);
				}
			}
		};

		if (requestMethod == 'POST')
		{
			xmlhttp.send(postParams);
		}
		else
		{
			xmlhttp.send(null);
		}
    }
    else
    {
    	responseObj = {};
    	callback(responseObj);
    }
}

function tpxHighLevelCreateProjectControl(pURLParams)
{
	var paramArray = new Object();
	paramArray['id'] = pURLParams;
	paramArray['ssoenabled'] = gSSOEnabled;

	tpxHighLevelProcessRequest('tpxHighLevelCreateProjectControl', true, paramArray, {});

	return false;
}

function tpxHighLevelCreateProjectView(pJsonResponseObject)
{
	if ((pJsonResponseObject.result == 0) || (pJsonResponseObject.result == -2))
	{
		onlineDesignURL = pJsonResponseObject.designurl;

		if (pJsonResponseObject.result == -2)
		{
			onlineDesignURL = onlineDesignURL;
		}

		window.location = onlineDesignURL;
	}
	else
	{
		var resultAlert = {
			body: '<p>' + pJsonResponseObject.resultmessage + '</p>',
			buttons: {
				action: {
					title: tpxGetLocaleString(kStr_ButtonOK),
					fn: function()
					{
						if ((pJsonResponseObject.redirecturl) && (pJsonResponseObject.redirecturl != ''))
						{
							document.location = pJsonResponseObject.redirecturl;
						}
						else
						{
							basicModal.close();
						}
					}
				}
			}
		}

		basicModal.show(resultAlert);
	}

	return false;
}

function tpxHighLevelCheckUserSessionControl(pLookUpToken)
{
	var paramArray = new Object();
	paramArray['lookuptoken'] = pLookUpToken;
	paramArray['ssoenabled'] = gSSOEnabled;

	tpxHighLevelProcessRequest('tpxHighLevelCheckUserSessionControl', true, paramArray, {});

	return false;
}

function tpxHighLevelCheckUserSessionView(pJsonResponseObject)
{
	if (pJsonResponseObject.result > 0)
	{
		var resultAlert =
		{
			body: '<p>' + pJsonResponseObject.resultmessage + '</p>',
			buttons:
			{
				action:
				{
					title: tpxGetLocaleString(kStr_ButtonOK),
					fn: function()
					{
						document.location = pJsonResponseObject.redirecturl;
					}
				}
			}
		}

		basicModal.show(resultAlert);
	}

	return false;
}

function tpxHighLevelBasketLocalise()
{
	var basketlinkli = document.getElementById('basketlinkli');

	if (basketlinkli)
	{
		basketlinkli.innerHTML = '<a href="#" id="basketlink" onClick="tpxBasketOnClick()" id="cart"><i class="fa fa-shopping-cart"></i> ' + tpxGetLocaleString(kStr_LabelBasket) + '</a>';
	}

	var emptyBasketButton = document.getElementById('emptyBasketButton');

	if (emptyBasketButton)
	{
		emptyBasketButton.innerHTML = tpxGetLocaleString(kStr_ButtonEmptyBasket);
	}

	var checkoutbutton = document.getElementById('checkoutbutton');

	if (checkoutbutton)
	{
		checkoutbutton.innerHTML = tpxGetLocaleString(kStr_ButtonCheckout);
	}

	var signIn = document.getElementById('signIn');

	if (signIn)
	{
		signIn.innerHTML = tpxGetLocaleString(kStr_LabelSignIn);
	}

	var register = document.getElementById('register');

	if (register)
	{
		register.innerHTML = tpxGetLocaleString(kStr_LabelRegister);
	}

	var projectslist = document.getElementById('projectslist');

	if (projectslist)
	{
		projectslist.innerHTML = tpxGetLocaleString(kStr_LabelMyProjects);
	}

	return false;
}

function tpxHighLevelEditProjectControl(pProjectRef, pCanUnlock, pForceKill)
{
	var paramArray = new Object();
	paramArray['projectref'] = pProjectRef;
	paramArray['forcekill'] = pForceKill;
	paramArray['canunlock'] = pCanUnlock;
	paramArray['ssoenabled'] = gSSOEnabled;

	tpxHighLevelProcessRequest('tpxHighLevelEditProjectControl', true, paramArray, {});

	return false;
}

function tpxHighLevelEditProjectView(pJsonResponseObject)
{
	if (pJsonResponseObject.result == 0)
	{
		onlineDesignURL = pJsonResponseObject.designurl;

		if (pJsonResponseObject.result == -2)
		{
			 onlineDesignURL = onlineDesignURL;
		}

		window.location = onlineDesignURL;

	}
	else
	{
		var resultAlert = {
			body: '<p>' + pJsonResponseObject.resultmessage + '</p>',
			buttons: {
				action:
				{
					title: tpxGetLocaleString(kStr_ButtonContinue),
					fn: function()
					{
						if (pJsonResponseObject.result == 6)
						{
							tpxHighLevelEditProjectControl(pJsonResponseObject.projectref, 1, 1);
						}
						else
						{
							if ((pJsonResponseObject.redirecturl) && (pJsonResponseObject.redirecturl != ''))
							{
								document.location = pJsonResponseObject.redirecturl;
							}
							else
							{
								basicModal.close();
							}
						}
					}
				},
				cancel:
				{
					title: tpxGetLocaleString(kStr_ButtonCancel),
					fn: basicModal.close
				}
			}
		}

		basicModal.show(resultAlert);
	}

	return false;
}

function tpxHighLevelDuplicateProjectControl(pProjectRef, pCurrentProjectName)
{
	var paramArray = new Object();
	paramArray['projectref'] = pProjectRef;

	var projectNameInput = {
			body: '<p>' + tpxGetLocaleString(kStr_LabelProjectName) +':</p><input class="basicModal__text" type="text" name="tpxprojectname" placeholder="'+ tpxGetLocaleString(kStr_LabelProjectName) + ' "value="' + pCurrentProjectName + '">',
			buttons: {
				cancel: {
					title: tpxGetLocaleString(kStr_ButtonCancel),
					fn: basicModal.close
				},
				action: {
					title: tpxGetLocaleString(kStr_ButtonContinue),
					fn: function(data) {

						if (data.tpxprojectname.length<1)
						{
							return basicModal.error('tpxprojectname');
						}
						else
						{
							paramArray['projectname'] = data.tpxprojectname;
							tpxHighLevelProcessRequest('tpxHighLevelDuplicateProjectControl', false, paramArray, {});
						}

						basicModal.close();
					}
				}
			}
		}

	basicModal.show(projectNameInput);

	return false;
}

function tpxHighLevelDuplicateProjectView(pJsonResponseObject)
{
	if (pJsonResponseObject.result == 0)
	{
		tpxHighLevelEditProjectControl(pJsonResponseObject.projectref, 1, 1);
	}
	else
	{
		var resultAlert = {
			body: '<p>' + pJsonResponseObject.resultmessage + '</p>',
			buttons: {
				action: {
					title: tpxGetLocaleString(kStr_ButtonOK),
					fn: basicModal.close
				}
			}
		}

		basicModal.show(resultAlert);
	}

	return false;
}

function tpxHighLevelRenameProjectControl(pItemID, pProjectRef, pFromProjectList)
{
	var paramArray = new Object();

	paramArray['projectref'] = pProjectRef;
	paramArray['basketitemidtoupdate'] = pItemID;

	var itemIDPrefix = '';

	if (pFromProjectList)
	{
		itemIDPrefix = 'projectlist'
	}

	var projectName = document.getElementById(itemIDPrefix + 'item-renameproject-' + pItemID).dataset.projectname;

	var projectNameInput = {
			body: '<p>' + tpxGetLocaleString(kStr_LabelRenameProject) +':</p><input class="basicModal__text" type="text" name="tpxprojectname" placeholder="'+ tpxGetLocaleString(kStr_LabelProjectName) + '" value="' + projectName + '">',
			buttons: {
				cancel: {
					title: tpxGetLocaleString(kStr_ButtonCancel),
					fn: basicModal.close
				},
				action: {
					title: tpxGetLocaleString(kStr_ButtonContinue),
					fn: function(data) {

						if (data.tpxprojectname.length<1)
						{
							return basicModal.error('tpxprojectname');
						}
						else
						{
							paramArray['newname'] = data.tpxprojectname;
							paramArray['fromprojectlist'] = pFromProjectList;
							tpxHighLevelProcessRequest('tpxHighLevelRenameProjectControl', false, paramArray, {});
						}

						basicModal.close();
					}
				}
			}
		}

	basicModal.show(projectNameInput);
}

function tpxHighLevelRenameProjectView(pJsonResponseObject, pFromProjectList)
{
	if (pJsonResponseObject.result == 0)
	{
		var itemIDPrefix = '';

		if (pFromProjectList)
		{
			itemIDPrefix = 'projectlist'
		}

		document.getElementById(itemIDPrefix + 'item-projectname-' + pJsonResponseObject.basketitemidtoupdate).innerHTML = pJsonResponseObject.newprojectname;
		document.getElementById(itemIDPrefix + 'item-renameproject-' + pJsonResponseObject.basketitemidtoupdate).dataset.projectname = pJsonResponseObject.newprojectname;
	}
	else
	{
		var resultAlert = {
			body: '<p>' + pJsonResponseObject.resultmessage + '</p>',
			buttons: {
				action: {
					title: tpxGetLocaleString(kStr_ButtonOK),
					fn: basicModal.close
				}
			}
		}

		basicModal.show(resultAlert);
	}

	return false;
}

function tpxHighLevelDeleteProjectControl(pItemID, pProjectRef, pProjectName, pCanUnlock, pForceKill)
{
	var paramArray = new Object();
	paramArray['projectref'] = pProjectRef;
	paramArray['forcekill'] = pForceKill;
	paramArray['canunlock'] = pCanUnlock;
	paramArray['itemtoremoveid'] = pItemID;

	var projectName = document.getElementById('projectlistitem-renameproject-' + pItemID).dataset.projectname;

	var deleteProjectPrompt = {
			body: '<p>' + tpxParamString(tpxGetLocaleString(kStr_MessageDeleteProjectConfirmation), projectName) + '</p>',
			buttons: {
				cancel: {
					title: tpxGetLocaleString(kStr_ButtonNo),
					fn: basicModal.close
				},
				action: {
					title: tpxGetLocaleString(kStr_ButtonYes),
					fn: function(data) {

						tpxHighLevelProcessRequest('tpxHighLevelDeleteProjectControl', false, paramArray, {});

						basicModal.close();
					}
				}
			}
		}

	basicModal.show(deleteProjectPrompt);

	return false;
}

function tpxHighLevelDeleteProjectView(pJsonResponseObject)
{
	var parentNode = document.getElementById('projectsItemList');
	var nodeToRemove = document.getElementById('projectlistitem' + pJsonResponseObject.itemtoremoveid);

	parentNode.removeChild(nodeToRemove);

	return false;
}

function tpxHighLevelBasketInitialise()
{
	var mawIDLookup = tpxReadCookie('mawhluid');
	var lookUpToken = tpxGetUrlVar('mawbt');
    var isLoggedInLookUpValue = tpxReadCookie('mawuli');
    var showLogout = false;
    var basketRef = '';
    var basketRefLookUpValue = tpxReadCookie('mawebhlbr');
    var hlCreateID = tpxGetUrlVar('mawebhlcreate');
    var ssoAction = '';
    var ssoActionParam = [];
    var ssoKey = tpxGetUrlVar('ssokey');

    // if the unique high level cookie has not been created then we must create it.
    if ((mawIDLookup == null) || (mawIDLookup == ''))
    {
    	tpxCreateMAWHLUIDCookie();
    }

   	// Single item workflow has been invoked with Multi Line Basket enabled on the brand
   	// we need to take the user straight into the project
   	if (hlCreateID != '')
   	{
   		tpxHighLevelCreateProjectControl('id='+hlCreateID);
   		return false;
   	}

   	tpxHighLevelBasketLocalise();

   	// check to see if we have a basket cookie and if we have use the cookie value for the basketref.
    if ((basketRefLookUpValue != null) && (basketRefLookUpValue != ''))
    {
        basketRef = basketRefLookUpValue;
    }

    if ((gSSOEnabled != kSSOOff) && (ssoKey != ''))
    {
    	var cookieData = tpxReadCookie('mawssoa');

    	if (cookieData != null)
    	{
    		var cookieDataArray = cookieData.split('|');

    		if (cookieDataArray.length == 2)
    		{
    			ssoAction = cookieDataArray[0];

    			if (cookieDataArray[1] != '')
    			{
    				ssoActionParam = JSON.parse(cookieDataArray[1]);
    			}
    		}
    	}
    }

    tpxDeleteCookie("mawssoa");

    if ((ssoAction != '') && (ssoKey != ''))
    {
    	if ((ssoAction == 'tpxHighLevelSignInInitControl') && (gSSOEnabled == kSSOAutomatic))
    	{
    		ssoAction = 'tpxHighLevelSignInInitControl2';
    	}

    	tpxHighLevelProcessRequest(ssoAction, false, ssoActionParam, {'sso': 2, 'ssokey': ssoKey});
    }
    else
    {
	    // if the session cookie has a legitimate value && we have been redirected back to the product selector,
	    // or we have a basket ref and the session cookie is still not a legitimate session ref
	    // then we must check to see if the session is still active
	    if ((lookUpToken != '') || ((basketRef != '') || (tpxGetUrlVar('odlo') == 1) || (gSSOEnabled == kSSOAutomatic)))
	    {

	    	if (tpxGetUrlVar('odlo') == 1)
	    	{
	    		tpxDeleteCookie("mawebhlbr");
	    	}

	    	tpxHighLevelCheckUserSessionControl(lookUpToken);
	    }
    }

    isLoggedInLookUpValue = tpxReadCookie('mawuli');

    tpxHighLevelLoggedInStatusCallBack(isLoggedInLookUpValue);

}

function tpxHighLevelLoggedInStatusCallBack(pIsSignedIn)
{
	var signInLabel = tpxGetLocaleString(kStr_LabelSignIn);
	var registerLabel = tpxGetLocaleString(kStr_LabelRegister);
	var signInLogoutButtonAction = tpxHighLevelSignInInitControl;
	var registerMyAccountButtonAction = tpxHighLevelRegisterInitControl;

	if (pIsSignedIn == 1)
	{
		signInLabel = tpxGetLocaleString(kStr_LabelLogout);
		registerLabel = tpxGetLocaleString(kStr_LabelMyAccount);
		signInLogoutButtonAction = tpxHighLevelLogoutControl;
		registerMyAccountButtonAction = tpxHighLevelMyAccountInitControl;
	}
	else
	{
		var basketList = document.getElementById('basketItemList');

		if (basketList)
		{
			basketList.innerHTML = '';
		}

		var projectList = document.getElementById('projectsItemList');

		if (projectList)
		{
			projectList.innerHTML = '';
		}
	}

	var signInButton = document.getElementById('signIn');

	if (signInButton)
	{
		signInButton.innerHTML = signInLabel;
		signInButton.onclick = signInLogoutButtonAction;
	}

	var registerButton = document.getElementById('register');

	if (registerButton)
	{
		registerButton.innerHTML = registerLabel;
		registerButton.onclick = registerMyAccountButtonAction;
	}
}

function tpxHighLevelLogoutControl()
{
	tpxHighLevelProcessRequest('tpxHighLevelLogoutControl', false, {}, {});

	return false;
}

function tpxHighLevelLogoutView(pJsonResponseObject)
{
	if ((pJsonResponseObject.result == 0) || (pJsonResponseObject.result == -2))
	{
		if ((pJsonResponseObject.result == -2) && (pJsonResponseObject.ssoredirect != ''))
		{
			document.location = pJsonResponseObject.ssoredirect;
		}
		else
		{
			tpxHighLevelLoggedInStatusCallBack(0);

			var basketCountElement = document.getElementById('basketcountbadgeinner');

			if (basketCountElement)
			{
				basketCountElement.innerHTML = gBasketCount;
			}
		}
	}

	return false;
}

function tpxHighLevelGetBasketContentsControl()
{
	tpxHighLevelProcessRequest('tpxHighLevelGetBasketContentsControl', false, {}, {});

	return false;
}

function tpxHighLevelGetBasketContentsView(pJsonResponseObject)
{
	var responseEmpty = tpxIsEmpty(pJsonResponseObject);

	if ((gBasketCount > 0) && (! responseEmpty))
	{
		var basketItems = pJsonResponseObject.items;

		var basketCountBadgeInner = document.getElementById('basketcountbadgeinner');

		if (basketCountBadgeInner)
		{
			basketCountBadgeInner.innerHTML = gBasketCount;
		}

		for (var i = 0; i < gBasketCount; i++)
		{
			var currentProjectRef = basketItems[i].projectref;

			var listItemElement = document.createElement('li');
				listItemElement.className = "clearfix";
				listItemElement.id = "basketitem" + (i + 1);
				listItemElement.dataset.projectref = basketItems[i].projectref;

			var projectInfoContainerElement = document.createElement('div');
				projectInfoContainerElement.className = "projectinfocontainer";

			var infoContainerElemet = document.createElement('div');
				infoContainerElemet.className = "infocontainer";

			var projectNameElement = document.createElement('span');

			projectNameElement.className = "item-projectname";
			projectNameElement.id = "item-projectname-" + (i + 1);

			var projectNameText = document.createTextNode(basketItems[i].projectname);
			projectNameElement.appendChild(projectNameText);

			var layoutNameElement = document.createElement('span');
			layoutNameElement.className = "item-layoutname";

			var layoutNameText = document.createTextNode(tpxGetLocaleString(kStr_LabelLayoutName) + ': ' + tpxGetLocaleString(basketItems[i].layoutname));
			layoutNameElement.appendChild(layoutNameText);

			var projectActionsContainer = document.createElement('div');
			projectActionsContainer.id = "projectactionscontainer";

			var editProjectLink = document.createElement('a');
			editProjectLink.className = "projectaction";
			editProjectLink.href = "#";
			editProjectLink.innerHTML = tpxGetLocaleString(kStr_LabelEdit);

			editProjectLink.onclick = (function()
			{
				var currentCount = i;
				var currentProjectRef = basketItems[i].projectref;
				return function()
				{
					tpxHighLevelEditProjectControl(currentProjectRef, 1, 1);
				}
			})();

			var renameProjectLink = document.createElement('a');
			renameProjectLink.id = "item-renameproject-" + (i + 1);
			renameProjectLink.className = "projectaction";
			renameProjectLink.href = "#";
			renameProjectLink.innerHTML = tpxGetLocaleString(kStr_LabelRename);
			renameProjectLink.dataset.projectname = basketItems[i].projectname;

			renameProjectLink.onclick = (function()
			{
				var currentCount = i;
				var currentProjectRef = basketItems[i].projectref;

				return function()
				{
					tpxHighLevelRenameProjectControl((currentCount + 1), currentProjectRef, false);
				}
			})();

			var duplicateProjectLink =  document.createElement('a');
			duplicateProjectLink.className = "projectaction";
			duplicateProjectLink.href = "#";
			duplicateProjectLink.innerHTML = tpxGetLocaleString(kStr_LabelDuplicate);

			duplicateProjectLink.onclick = (function()
			{
				 var currentCount = i;
				 var currentProjectRef = basketItems[i].projectref;
				 var currentProjectName = basketItems[i].projectname;
				return function()
				{
					tpxHighLevelDuplicateProjectControl(currentProjectRef, currentProjectName);
				}
			})();


			projectActionsContainer.appendChild(editProjectLink);
			projectActionsContainer.appendChild(renameProjectLink);
			projectActionsContainer.appendChild(duplicateProjectLink);


			var removeFromBasketElement =  document.createElement('div');
			removeFromBasketElement.className = "removefrombasket";

			var basketRemoveIconElement = document.createElement('i');
			basketRemoveIconElement.className = "remove-icon fa fa-times";

			basketRemoveIconElement.onclick = (function()
			{
				var currentCount = i;
				var currentProjectRef = basketItems[i].projectref;
				return function()
				{
					tpxHighLevelRemoveItemFromBasketControl('basketitem' + (currentCount + 1), currentProjectRef);
				}
			})();

			removeFromBasketElement.appendChild(basketRemoveIconElement);

			infoContainerElemet.appendChild(projectNameElement);
			infoContainerElemet.appendChild(layoutNameElement);
			infoContainerElemet.appendChild(projectActionsContainer);

			projectInfoContainerElement.appendChild(infoContainerElemet);
			projectInfoContainerElement.appendChild(removeFromBasketElement);

			listItemElement.appendChild(projectInfoContainerElement);

			var basketItemContainer = document.getElementById('basketItemList');
			basketItemContainer.appendChild(listItemElement);
		}
	}

	// hide the loading spinner
	document.getElementById('loadingspinner').style.display = 'none';

	return false;
}

function tpxHighLevelGetProjectListControl()
{
	tpxHighLevelProcessRequest('tpxHighLevelGetProjectListControl', false, {}, {});

	return false;
}

function tpxHighLevelGetProjectListView(pJsonResponseObject)
{
	var responseEmpty = tpxIsEmpty(pJsonResponseObject);

	if ((gProjectListCount > 0) && (! responseEmpty))
	{
		var basketItems = pJsonResponseObject.items;

		for (var i = 0; i < gProjectListCount; i++)
		{
			var currentProjectRef = basketItems[i].projectref;

			var listItemElement = document.createElement('li');
			listItemElement.className = "clearfix";
			listItemElement.id = "projectlistitem" + (i + 1);
			listItemElement.dataset.projectref = basketItems[i].projectref;

			var projectInfoContainerElement = document.createElement('div');
			projectInfoContainerElement.className = "projectinfocontainer";

			var infoContainerElemet = document.createElement('div');
			infoContainerElemet.className = "infocontainer";

			var projectNameElement = document.createElement('span');
			projectNameElement.className = "item-projectname";
			projectNameElement.id = "projectlistitem-projectname-" + (i + 1);

			var projectNameText = document.createTextNode(basketItems[i].projectname);
			projectNameElement.appendChild(projectNameText);

			var layoutNameElement = document.createElement('span');
			layoutNameElement.className = "item-layoutname";

			var layoutNameText = document.createTextNode(tpxGetLocaleString(kStr_LabelLayoutName) + ': ' + tpxGetLocaleString(basketItems[i].layoutname));
			layoutNameElement.appendChild(layoutNameText);

			var projectActionsContainer = document.createElement('div');
			projectActionsContainer.id = "projectlistactionscontainer";

			var editProjectLink = document.createElement('a');
			editProjectLink.className = "projectaction";
			editProjectLink.href = "#";
			editProjectLink.innerHTML = tpxGetLocaleString(kStr_LabelEdit);

			editProjectLink.onclick = (function()
			{
				var currentCount = i;
				var currentProjectRef = basketItems[i].projectref;
				return function()
				{
					tpxHighLevelEditProjectControl(currentProjectRef, 1, 1);
				}
			})();

			var renameProjectLink = document.createElement('a');
			renameProjectLink.id = "projectlistitem-renameproject-" + (i + 1);
			renameProjectLink.className = "projectaction";
			renameProjectLink.href = "#";
			renameProjectLink.innerHTML = tpxGetLocaleString(kStr_LabelRename);
			renameProjectLink.dataset.projectname = basketItems[i].projectname;

			renameProjectLink.onclick = (function()
			{
				var currentCount = i;
				var currentProjectRef = basketItems[i].projectref;

				return function()
				{
					tpxHighLevelRenameProjectControl((currentCount + 1), currentProjectRef, true);
				}
			})();

			var duplicateProjectLink =  document.createElement('a');
			duplicateProjectLink.className = "projectaction";
			duplicateProjectLink.href = "#";
			duplicateProjectLink.innerHTML = tpxGetLocaleString(kStr_LabelDuplicate);

			duplicateProjectLink.onclick = (function()
			{
				 var currentCount = i;
				 var currentProjectRef = basketItems[i].projectref;
				 var currentProjectName = basketItems[i].projectname;
				return function()
				{
					tpxHighLevelDuplicateProjectControl(currentProjectRef, currentProjectName);
				}
			})();

			var deleteProjectLink =  document.createElement('a');
			deleteProjectLink.className = "projectaction";
			deleteProjectLink.href = "#";
			deleteProjectLink.innerHTML = tpxGetLocaleString(kStr_LabelDelete);

			deleteProjectLink.onclick = (function()
			{
				 var currentCount = i;
				 var currentProjectRef = basketItems[i].projectref;
				 var currentProjectName = basketItems[i].projectname;
				return function()
				{
					tpxHighLevelDeleteProjectControl((currentCount + 1), currentProjectRef, currentProjectName, 1, 0);
				}
			})();


			projectActionsContainer.appendChild(editProjectLink);
			projectActionsContainer.appendChild(renameProjectLink);
			projectActionsContainer.appendChild(duplicateProjectLink);
			projectActionsContainer.appendChild(deleteProjectLink);

			infoContainerElemet.appendChild(projectNameElement);
			infoContainerElemet.appendChild(layoutNameElement);
			infoContainerElemet.appendChild(projectActionsContainer);

			projectInfoContainerElement.appendChild(infoContainerElemet);

			listItemElement.appendChild(projectInfoContainerElement);

			var projectListItemContainer = document.getElementById('projectsItemList');
			projectListItemContainer.appendChild(listItemElement);
		}
	}

	// hide the loading spinner
	document.getElementById('projectloadingspinner').style.display = 'none';

	return false;
}

function tpxHighLevelRemoveItemFromBasketControl(pItemID, pProjectRef)
{
	var paramArray = new Object();
	paramArray['itemtoremoveid'] = pItemID;
	paramArray['projectref'] = pProjectRef;

	tpxHighLevelProcessRequest('tpxHighLevelRemoveItemFromBasketControl', false, paramArray, {});

	return false;
}

function tpxHighLevelRemoveItemFromBasketView(pJsonResponseObject)
{
	var parentNode = document.getElementById('basketItemList');
	var nodeToRemove = document.getElementById(pJsonResponseObject.itemtoremoveid);

	parentNode.removeChild(nodeToRemove);

	var basketCountElement = document.getElementById('basketcountbadgeinner');
	basketCountElement.innerHTML = gBasketCount;

	return false;
}

function tpxHighLevelEmptyBasketControl()
{
	tpxHighLevelProcessRequest('tpxHighLevelEmptyBasketControl', false, {}, {});

	return false;
}

function tpxHighLevelEmptyBasketView(pJsonResponseObject)
{
	var basketList = document.getElementById('basketItemList');
	basketList.innerHTML = '';

	var basketCountElement = document.getElementById('basketcountbadgeinner');
	basketCountElement.innerHTML = gBasketCount;

	return false;
}

function tpxHighLevelCheckoutControl()
{
	var paramArray = new Object();
	paramArray['ssoenabled'] = gSSOEnabled;

	tpxHighLevelProcessRequest('tpxHighLevelCheckoutControl', true, paramArray, {});

	return false;
}

function tpxHighLevelCheckoutView(pJsonResponseObject)
{
	if (pJsonResponseObject.result == 0)
	{
		shoppingCartURL = pJsonResponseObject.shoppingcarturl;

		window.location.replace(shoppingCartURL);
	}
	else
	{
		var resultAlert =
		{
			body: '<p>' + pJsonResponseObject.resultmessage + '</p>',
			buttons:
			{
				action:
				{
					title: tpxGetLocaleString(kStr_ButtonOK),
					fn: function()
					{
						document.location = pJsonResponseObject.shoppingcarturl;
					}
				}
			}
		}

		basicModal.show(resultAlert);
	}

	return false;
}

function tpxHighLevelSignInInitControl()
{
	var paramArray = new Object();
	paramArray['groupcode'] = '';
	paramArray['ssoenabled'] = gSSOEnabled;

	tpxHighLevelProcessRequest('tpxHighLevelSignInInitControl', true, paramArray, {});

	return false;
}

function tpxHighLevelSignInInitView(pJsonResponseObject)
{
	if ((pJsonResponseObject.result == 0) || (pJsonResponseObject.result == -2))
	{
		var signInURL = pJsonResponseObject.signinurl;

		if (signInURL != '')
		{
			window.location = signInURL;
		}
		else
		{
		    var isLoggedInLookUpValue = tpxReadCookie('mawuli');

		    tpxHighLevelLoggedInStatusCallBack(isLoggedInLookUpValue);
		}
	}
	else
	{
		var resultAlert = {
			body: '<p>' + pJsonResponseObject.resultmessage + '</p>',
			buttons: {
				action: {
					title: tpxGetLocaleString(kStr_ButtonOK),
					fn: basicModal.close
				}
			}
		}

		basicModal.show(resultAlert);
	}


	return false;
}

function tpxHighLevelRegisterInitControl()
{
	var paramArray = new Object();
	paramArray['groupcode'] = '';

	tpxHighLevelProcessRequest('tpxHighLevelRegisterInitControl', false, paramArray, {});

	return false;
}

function tpxHighLevelRegisterInitView(pJsonResponseObject)
{
	if (pJsonResponseObject.result == 0)
	{
		registerURL = pJsonResponseObject.signinurl;
		window.location = registerURL;
	}
	else
	{
		var resultAlert = {
			body: '<p>' + pJsonResponseObject.resultmessage + '</p>',
			buttons: {
				action: {
					title: tpxGetLocaleString(kStr_ButtonOK),
					fn: basicModal.close
				}
			}
		}

		basicModal.show(resultAlert);
	}

	return false;
}

function tpxHighLevelMyAccountInitControl()
{
	tpxHighLevelProcessRequest('tpxHighLevelMyAccountInitControl', false, {}, {});

	return false;
}

function tpxHighLevelMyAccountInitView(pJsonResponseObject)
{
	if (pJsonResponseObject.result == 0)
	{
		myAccountURL = pJsonResponseObject.myaccounturl;
		window.location = myAccountURL;
	}
	else
	{
		var resultAlert = {
			body: '<p>' + pJsonResponseObject.resultmessage + '</p>',
			buttons: {
				action: {
					title: tpxGetLocaleString(kStr_ButtonOK),
					fn: basicModal.close
				}
			}
		}

		basicModal.show(resultAlert);
	}


	return false;
}

function tpxBasketOnClick()
{
	var cartContainer = document.getElementById('shoppigncartcontents');

	if (cartContainer.style.display == 'block')
	{
		var basketItemContainer = document.getElementById('basketItemList');
		cartContainer.style.display = "none";

		document.getElementById('loadingspinner').style.display = 'block';
	}
	else
	{
		tpxHighLevelGetBasketContentsControl();
		cartContainer.style.display = "block";
	}

	return false;
}

function tpxMyProjectsOnClick()
{
	var projectListContainer = document.getElementById('projectlistcontents');

	if (projectListContainer.style.display == 'block')
	{
		var projectItemContainer = document.getElementById('projectsItemList');
		projectListContainer.style.display = "none";

		document.getElementById('projectloadingspinner').style.display = 'block';
	}
	else
	{
		tpxHighLevelGetProjectListControl();
		projectListContainer.style.display = "block";

		var documentWidth = window.innerWidth;
		var myProjectsBounds =  document.getElementById('projectslist').getBoundingClientRect();
		var projectContainerBounds = projectListContainer.getBoundingClientRect();
		var projectContentsWidth = projectContainerBounds.width / 2;
		var middleMyProjectsPosition = myProjectsBounds.left + (myProjectsBounds.width / 2);

		var left = (middleMyProjectsPosition - projectContentsWidth);
		var right = projectContainerBounds.width + myProjectsBounds.left;

		if (left < 0)
		{
			left = 10;
		}

		if (right > documentWidth)
		{
			left = (documentWidth - projectContainerBounds.width) - 10;
		}


		document.getElementById('projectlistcontents').style.left = left + 'px';
	}
}