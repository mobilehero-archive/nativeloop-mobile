import Ti = Titanium;
declare module Titanium {
	export var bubbleParent : boolean;
	export var apiName : string;
	export var lifecycleContainer : any;
	export var userAgent : string;
	export var version : string;
	export var buildDate : string;
	export var buildHash : string;
	export function addEventListener (name: string, callback: (...args : any[]) => any) : void;
	export function removeEventListener (name: string, callback: (...args : any[]) => any) : void;
	export function fireEvent (name: string, event: Dictionary<Object>) : void;
	export function applyProperties (props: Dictionary<Object>) : void;
	export function include (name: string) : void;
	export function createBuffer (params: CreateBufferArgs) : Titanium.Buffer;
	export function createProxy (parameters?: Dictionary<Titanium.Proxy>) : Titanium.Proxy;
	export function getBubbleParent () : boolean;
	export function setBubbleParent (bubbleParent: boolean) : void;
	export function getApiName () : string;
	export function getLifecycleContainer () : any;
	export function setLifecycleContainer (lifecycleContainer: Titanium.UI.Window) : void;
	export function setLifecycleContainer (lifecycleContainer: Titanium.UI.TabGroup) : void;
	export function getUserAgent () : string;
	export function setUserAgent (userAgent: string) : void;
	export function getVersion () : string;
	export function getBuildDate () : string;
	export function getBuildHash () : string;
	export interface Proxy  {
		bubbleParent : boolean;
		apiName : string;
		lifecycleContainer : any;
		addEventListener (name: string, callback: (...args : any[]) => any) : void;
		removeEventListener (name: string, callback: (...args : any[]) => any) : void;
		fireEvent (name: string, event: Dictionary<Object>) : void;
		applyProperties (props: Dictionary<Object>) : void;
		getBubbleParent () : boolean;
		setBubbleParent (bubbleParent: boolean) : void;
		getApiName () : string;
		getLifecycleContainer () : any;
		setLifecycleContainer (lifecycleContainer: Titanium.UI.Window) : void;
		setLifecycleContainer (lifecycleContainer: Titanium.UI.TabGroup) : void;
	}
	export enum Module {

	}
	export module UI {
		export var bubbleParent : boolean;
		export var apiName : string;
		export var lifecycleContainer : any;
		export var ANIMATION_CURVE_EASE_IN : number;
		export var ANIMATION_CURVE_EASE_IN_OUT : number;
		export var ANIMATION_CURVE_EASE_OUT : number;
		export var ANIMATION_CURVE_LINEAR : number;
		export var ATTRIBUTE_FONT : number;
		export var ATTRIBUTE_FOREGROUND_COLOR : number;
		export var ATTRIBUTE_BACKGROUND_COLOR : number;
		export var ATTRIBUTE_LIGATURE : number;
		export var ATTRIBUTE_LETTERPRESS_STYLE : number;
		export var ATTRIBUTE_KERN : number;
		export var ATTRIBUTE_STRIKETHROUGH_STYLE : number;
		export var ATTRIBUTE_UNDERLINES_STYLE : number;
		export var ATTRIBUTE_STROKE_COLOR : number;
		export var ATTRIBUTE_STROKE_WIDTH : number;
		export var ATTRIBUTE_SHADOW : number;
		export var ATTRIBUTE_WRITING_DIRECTION : number;
		export var ATTRIBUTE_TEXT_EFFECT : number;
		export var ATTRIBUTE_LINK : number;
		export var ATTRIBUTE_BASELINE_OFFSET : number;
		export var ATTRIBUTE_UNDERLINE_COLOR : number;
		export var ATTRIBUTE_STRIKETHROUGH_COLOR : number;
		export var ATTRIBUTE_OBLIQUENESS : number;
		export var ATTRIBUTE_EXPANSION : number;
		export var ATTRIBUTE_LINE_BREAK : number;
		export var ATTRIBUTE_UNDERLINE_STYLE_NONE : number;
		export var ATTRIBUTE_UNDERLINE_STYLE_SINGLE : number;
		export var ATTRIBUTE_UNDERLINE_STYLE_THICK : number;
		export var ATTRIBUTE_UNDERLINE_STYLE_DOUBLE : number;
		export var ATTRIBUTE_UNDERLINE_PATTERN_SOLID : number;
		export var ATTRIBUTE_UNDERLINE_PATTERN_DOT : number;
		export var ATTRIBUTE_UNDERLINE_PATTERN_DASH : number;
		export var ATTRIBUTE_UNDERLINE_PATTERN_DASH_DOT : number;
		export var ATTRIBUTE_UNDERLINE_PATTERN_DASH_DOT_DOT : number;
		export var ATTRIBUTE_UNDERLINE_BY_WORD : number;
		export var ATTRIBUTE_WRITING_DIRECTION_EMBEDDING : number;
		export var ATTRIBUTE_WRITING_DIRECTION_OVERRIDE : number;
		export var ATTRIBUTE_WRITING_DIRECTION_NATURAL : number;
		export var ATTRIBUTE_WRITING_DIRECTION_LEFT_TO_RIGHT : number;
		export var ATTRIBUTE_WRITING_DIRECTION_RIGHT_TO_LEFT : number;
		export var ATTRIBUTE_LINE_BREAK_BY_WORD_WRAPPING : number;
		export var ATTRIBUTE_LINE_BREAK_BY_CHAR_WRAPPING : number;
		export var ATTRIBUTE_LINE_BREAK_BY_CLIPPING : number;
		export var ATTRIBUTE_LINE_BREAK_BY_TRUNCATING_HEAD : number;
		export var ATTRIBUTE_LINE_BREAK_BY_TRUNCATING_MIDDLE : number;
		export var ATTRIBUTE_LINE_BREAK_BY_TRUNCATING_TAIL : number;
		export var AUTODETECT_ADDRESS : number;
		export var AUTODETECT_ALL : number;
		export var AUTODETECT_CALENDAR : number;
		export var AUTODETECT_LINK : number;
		export var AUTODETECT_NONE : number;
		export var AUTODETECT_PHONE : number;
		export var AUTOLINK_MAP_ADDRESSES : number;
		export var AUTOLINK_ALL : number;
		export var AUTOLINK_CALENDAR : number;
		export var AUTOLINK_URLS : number;
		export var AUTOLINK_NONE : number;
		export var AUTOLINK_PHONE_NUMBERS : number;
		export var AUTOLINK_EMAIL_ADDRESSES : number;
		export var BLEND_MODE_CLEAR : number;
		export var BLEND_MODE_COLOR : number;
		export var BLEND_MODE_COLOR_BURN : number;
		export var BLEND_MODE_COLOR_DODGE : number;
		export var BLEND_MODE_COPY : number;
		export var BLEND_MODE_DARKEN : number;
		export var BLEND_MODE_DESTINATION_ATOP : number;
		export var BLEND_MODE_DESTINATION_IN : number;
		export var BLEND_MODE_DESTINATION_OUT : number;
		export var BLEND_MODE_DESTINATION_OVER : number;
		export var BLEND_MODE_DIFFERENCE : number;
		export var BLEND_MODE_EXCLUSION : number;
		export var BLEND_MODE_HARD_LIGHT : number;
		export var BLEND_MODE_HUE : number;
		export var BLEND_MODE_LIGHTEN : number;
		export var BLEND_MODE_LUMINOSITY : number;
		export var BLEND_MODE_MULTIPLY : number;
		export var BLEND_MODE_NORMAL : number;
		export var BLEND_MODE_OVERLAY : number;
		export var BLEND_MODE_PLUS_DARKER : number;
		export var BLEND_MODE_PLUS_LIGHTER : number;
		export var BLEND_MODE_SATURATION : number;
		export var BLEND_MODE_SCREEN : number;
		export var BLEND_MODE_SOFT_LIGHT : number;
		export var BLEND_MODE_SOURCE_ATOP : number;
		export var BLEND_MODE_SOURCE_IN : number;
		export var BLEND_MODE_SOURCE_OUT : number;
		export var BLEND_MODE_XOR : number;
		export var TEXT_ELLIPSIZE_TRUNCATE_START : number;
		export var TEXT_ELLIPSIZE_TRUNCATE_MIDDLE : number;
		export var TEXT_ELLIPSIZE_TRUNCATE_END : number;
		export var TEXT_ELLIPSIZE_TRUNCATE_MARQUEE : number;
		export var EXTEND_EDGE_TOP : number;
		export var EXTEND_EDGE_BOTTOM : number;
		export var EXTEND_EDGE_LEFT : number;
		export var EXTEND_EDGE_RIGHT : number;
		export var EXTEND_EDGE_NONE : number;
		export var EXTEND_EDGE_ALL : number;
		export var FACE_DOWN : number;
		export var FACE_UP : number;
		export var FILL : string;
		export var INHERIT : string;
		export var INPUT_BORDERSTYLE_BEZEL : number;
		export var INPUT_BORDERSTYLE_LINE : number;
		export var INPUT_BORDERSTYLE_NONE : number;
		export var INPUT_BORDERSTYLE_ROUNDED : number;
		export var INPUT_BUTTONMODE_ALWAYS : number;
		export var INPUT_BUTTONMODE_NEVER : number;
		export var INPUT_BUTTONMODE_ONBLUR : number;
		export var INPUT_BUTTONMODE_ONFOCUS : number;
		export var INPUT_TYPE_CLASS_NUMBER : number;
		export var INPUT_TYPE_CLASS_TEXT : number;
		export var KEYBOARD_APPEARANCE_ALERT : number;
		export var KEYBOARD_APPEARANCE_DEFAULT : number;
		export var KEYBOARD_APPEARANCE_DARK : number;
		export var KEYBOARD_APPEARANCE_LIGHT : number;
		export var KEYBOARD_ASCII : number;
		export var KEYBOARD_DECIMAL_PAD : number;
		export var KEYBOARD_DEFAULT : number;
		export var KEYBOARD_EMAIL : number;
		export var KEYBOARD_NAMEPHONE_PAD : number;
		export var KEYBOARD_NUMBERS_PUNCTUATION : number;
		export var KEYBOARD_NUMBER_PAD : number;
		export var KEYBOARD_PHONE_PAD : number;
		export var KEYBOARD_URL : number;
		export var KEYBOARD_TYPE_DECIMAL_PAD : number;
		export var KEYBOARD_TYPE_ASCII : number;
		export var KEYBOARD_TYPE_DEFAULT : number;
		export var KEYBOARD_TYPE_EMAIL : number;
		export var KEYBOARD_TYPE_NAMEPHONE_PAD : number;
		export var KEYBOARD_TYPE_NUMBERS_PUNCTUATION : number;
		export var KEYBOARD_TYPE_NUMBER_PAD : number;
		export var KEYBOARD_TYPE_PHONE_PAD : number;
		export var KEYBOARD_TYPE_WEBSEARCH : number;
		export var KEYBOARD_TYPE_TWITTER : number;
		export var KEYBOARD_TYPE_URL : number;
		export var LANDSCAPE_LEFT : number;
		export var LANDSCAPE_RIGHT : number;
		export var LIST_ACCESSORY_TYPE_NONE : number;
		export var LIST_ACCESSORY_TYPE_CHECKMARK : number;
		export var LIST_ACCESSORY_TYPE_DETAIL : number;
		export var LIST_ACCESSORY_TYPE_DISCLOSURE : number;
		export var LIST_ITEM_TEMPLATE_DEFAULT : number;
		export var LIST_ITEM_TEMPLATE_SETTINGS : number;
		export var LIST_ITEM_TEMPLATE_CONTACTS : number;
		export var LIST_ITEM_TEMPLATE_SUBTITLE : number;
		export var NOTIFICATION_DURATION_LONG : number;
		export var NOTIFICATION_DURATION_SHORT : number;
		export var PICKER_TYPE_COUNT_DOWN_TIMER : number;
		export var PICKER_TYPE_DATE : number;
		export var PICKER_TYPE_DATE_AND_TIME : number;
		export var PICKER_TYPE_PLAIN : number;
		export var PICKER_TYPE_TIME : number;
		export var PORTRAIT : number;
		export var RETURNKEY_CONTINUE : number;
		export var RETURNKEY_DEFAULT : number;
		export var RETURNKEY_DONE : number;
		export var RETURNKEY_EMERGENCY_CALL : number;
		export var RETURNKEY_GO : number;
		export var RETURNKEY_GOOGLE : number;
		export var RETURNKEY_JOIN : number;
		export var RETURNKEY_NEXT : number;
		export var RETURNKEY_ROUTE : number;
		export var RETURNKEY_SEARCH : number;
		export var RETURNKEY_SEND : number;
		export var RETURNKEY_YAHOO : number;
		export var SIZE : string;
		export var TABLE_VIEW_SEPARATOR_STYLE_NONE : number;
		export var TABLE_VIEW_SEPARATOR_STYLE_SINGLE_LINE : number;
		export var TEXT_ALIGNMENT_CENTER : any;
		export var TEXT_ALIGNMENT_LEFT : any;
		export var TEXT_ALIGNMENT_RIGHT : any;
		export var TEXT_AUTOCAPITALIZATION_ALL : number;
		export var TEXT_AUTOCAPITALIZATION_NONE : number;
		export var TEXT_AUTOCAPITALIZATION_SENTENCES : number;
		export var TEXT_AUTOCAPITALIZATION_WORDS : number;
		export var TEXT_STYLE_HEADLINE : string;
		export var TEXT_STYLE_SUBHEADLINE : string;
		export var TEXT_STYLE_BODY : string;
		export var TEXT_STYLE_FOOTNOTE : string;
		export var TEXT_STYLE_CAPTION1 : string;
		export var TEXT_STYLE_CAPTION2 : string;
		export var TEXT_VERTICAL_ALIGNMENT_BOTTOM : any;
		export var TEXT_VERTICAL_ALIGNMENT_CENTER : any;
		export var TEXT_VERTICAL_ALIGNMENT_TOP : any;
		export var UNIT_CM : string;
		export var UNIT_DIP : string;
		export var UNIT_IN : string;
		export var UNIT_MM : string;
		export var UNIT_PX : string;
		export var UNKNOWN : number;
		export var UPSIDE_PORTRAIT : number;
		export var URL_ERROR_AUTHENTICATION : number;
		export var URL_ERROR_BAD_URL : number;
		export var URL_ERROR_CONNECT : number;
		export var URL_ERROR_SSL_FAILED : number;
		export var URL_ERROR_FILE : number;
		export var URL_ERROR_FILE_NOT_FOUND : number;
		export var URL_ERROR_HOST_LOOKUP : number;
		export var URL_ERROR_REDIRECT_LOOP : number;
		export var URL_ERROR_TIMEOUT : number;
		export var URL_ERROR_UNKNOWN : number;
		export var URL_ERROR_UNSUPPORTED_SCHEME : number;
		export var backgroundColor : string;
		export var backgroundImage : string;
		export var currentTab : Titanium.UI.Tab;
		export var currentWindow : Titanium.UI.Window;
		export var orientation : number;
		export function addEventListener (name: string, callback: (...args : any[]) => any) : void;
		export function removeEventListener (name: string, callback: (...args : any[]) => any) : void;
		export function fireEvent (name: string, event: Dictionary<Object>) : void;
		export function applyProperties (props: Dictionary<Object>) : void;
		export function create2DMatrix (parameters?: MatrixCreationDict) : Titanium.UI._2DMatrix;
		export function convertUnits (convertFromValue: string, convertToUnits: number) : number;
		export function createView (parameters?: Dictionary<Titanium.UI.View>) : Titanium.UI.View;
		export function create3DMatrix (parameters?: Dictionary<Titanium.UI._3DMatrix>) : Titanium.UI._3DMatrix;
		export function createActivityIndicator (parameters?: Dictionary<Titanium.UI.ActivityIndicator>) : Titanium.UI.ActivityIndicator;
		export function createAlertDialog (parameters?: Dictionary<Titanium.UI.AlertDialog>) : Titanium.UI.AlertDialog;
		export function createAnimation (parameters?: Dictionary<Titanium.UI.Animation>) : Titanium.UI.Animation;
		export function createAttributedString (parameters?: Dictionary<Titanium.UI.AttributedString>) : Titanium.UI.AttributedString;
		export function createButton (parameters?: Dictionary<Titanium.UI.Button>) : Titanium.UI.Button;
		export function createButtonBar (parameters?: Dictionary<Titanium.UI.ButtonBar>) : Titanium.UI.ButtonBar;
		export function createCoverFlowView (parameters?: Dictionary<Titanium.UI.CoverFlowView>) : Titanium.UI.CoverFlowView;
		export function createDashboardItem (parameters?: Dictionary<Titanium.UI.DashboardItem>) : Titanium.UI.DashboardItem;
		export function createDashboardView (parameters?: Dictionary<Titanium.UI.DashboardView>) : Titanium.UI.DashboardView;
		export function createEmailDialog (parameters?: Dictionary<Titanium.UI.EmailDialog>) : Titanium.UI.EmailDialog;
		export function createImageView (parameters?: Dictionary<Titanium.UI.ImageView>) : Titanium.UI.ImageView;
		export function createLabel (parameters?: Dictionary<Titanium.UI.Label>) : Titanium.UI.Label;
		export function createListSection (parameters?: Dictionary<Titanium.UI.ListSection>) : Titanium.UI.ListSection;
		export function createListView (parameters?: Dictionary<Titanium.UI.ListView>) : Titanium.UI.ListView;
		export function createMaskedImage (parameters?: Dictionary<Titanium.UI.MaskedImage>) : Titanium.UI.MaskedImage;
		export function createNotification (parameters?: Dictionary<Titanium.UI.Notification>) : Titanium.UI.Notification;
		export function createOptionDialog (parameters?: Dictionary<Titanium.UI.OptionDialog>) : Titanium.UI.OptionDialog;
		export function createPicker (parameters?: Dictionary<Titanium.UI.Picker>) : Titanium.UI.Picker;
		export function createPickerColumn (parameters?: Dictionary<Titanium.UI.PickerColumn>) : Titanium.UI.PickerColumn;
		export function createPickerRow (parameters?: Dictionary<Titanium.UI.PickerRow>) : Titanium.UI.PickerRow;
		export function createProgressBar (parameters?: Dictionary<Titanium.UI.ProgressBar>) : Titanium.UI.ProgressBar;
		export function createRefreshControl (parameters?: Dictionary<Titanium.UI.RefreshControl>) : Titanium.UI.RefreshControl;
		export function createScrollView (parameters?: Dictionary<Titanium.UI.ScrollView>) : Titanium.UI.ScrollView;
		export function createScrollableView (parameters?: Dictionary<Titanium.UI.ScrollableView>) : Titanium.UI.ScrollableView;
		export function createSearchBar (parameters?: Dictionary<Titanium.UI.SearchBar>) : Titanium.UI.SearchBar;
		export function createSlider (parameters?: Dictionary<Titanium.UI.Slider>) : Titanium.UI.Slider;
		export function createSwitch (parameters?: Dictionary<Titanium.UI.Switch>) : Titanium.UI.Switch;
		export function createTab (parameters?: Dictionary<Titanium.UI.Tab>) : Titanium.UI.Tab;
		export function createTabGroup (parameters?: Dictionary<Titanium.UI.TabGroup>) : Titanium.UI.TabGroup;
		export function createTabbedBar (parameters?: Dictionary<Titanium.UI.TabbedBar>) : Titanium.UI.TabbedBar;
		export function createTableView (parameters?: Dictionary<Titanium.UI.TableView>) : Titanium.UI.TableView;
		export function createTableViewRow (parameters?: Dictionary<Titanium.UI.TableViewRow>) : Titanium.UI.TableViewRow;
		export function createTableViewSection (parameters?: Dictionary<Titanium.UI.TableViewSection>) : Titanium.UI.TableViewSection;
		export function createTextArea (parameters?: Dictionary<Titanium.UI.TextArea>) : Titanium.UI.TextArea;
		export function createTextField (parameters?: Dictionary<Titanium.UI.TextField>) : Titanium.UI.TextField;
		export function createToolbar (parameters?: Dictionary<Titanium.UI.Toolbar>) : Titanium.UI.Toolbar;
		export function getBubbleParent () : boolean;
		export function setBubbleParent (bubbleParent: boolean) : void;
		export function getApiName () : string;
		export function getLifecycleContainer () : any;
		export function setLifecycleContainer (lifecycleContainer: Titanium.UI.Window) : void;
		export function setLifecycleContainer (lifecycleContainer: Titanium.UI.TabGroup) : void;
		export function getBackgroundColor () : string;
		export function setBackgroundColor (backgroundColor: string) : void;
		export function getBackgroundImage () : string;
		export function setBackgroundImage (backgroundImage: string) : void;
		export function getCurrentTab () : Titanium.UI.Tab;
		export function setCurrentTab (currentTab: Titanium.UI.Tab) : void;
		export function getCurrentWindow () : Titanium.UI.Window;
		export function getOrientation () : number;
		export function setOrientation (orientation: number) : void;
		export function createWebView (parameters?: Dictionary<Titanium.UI.WebView>) : Titanium.UI.WebView;
		export function createWindow (parameters?: Dictionary<Titanium.UI.Window>) : Titanium.UI.Window;
		export interface View extends Titanium.Proxy {
			accessibilityHidden : boolean;
			accessibilityHint : string;
			accessibilityLabel : string;
			accessibilityValue : string;
			anchorPoint : Point;
			animatedCenter : Point;
			backgroundColor : string;
			backgroundDisabledColor : string;
			backgroundDisabledImage : string;
			backgroundFocusedColor : string;
			backgroundFocusedImage : string;
			backgroundGradient : Gradient;
			backgroundImage : string;
			backgroundRepeat : boolean;
			backgroundLeftCap : number;
			backgroundSelectedColor : string;
			backgroundSelectedImage : string;
			backgroundTopCap : number;
			borderColor : string;
			borderRadius : number;
			borderWidth : number;
			bottom : any;
			center : Point;
			children : Array<Titanium.UI.View>;
			clipMode : number;
			elevation : number;
			focusable : boolean;
			height : any;
			left : any;
			layout : string;
			opacity : number;
			overrideCurrentAnimation : boolean;
			pullBackgroundColor : string;
			previewContext : Titanium.UI.View;
			right : any;
			rect : Dimension;
			size : Dimension;
			softKeyboardOnFocus : number;
			tintColor : any;
			top : any;
			touchEnabled : boolean;
			transform : any;
			translationX : number;
			translationY : number;
			translationZ : number;
			transitionName : string;
			viewShadowRadius : number;
			viewShadowColor : string;
			viewShadowOffset : Point;
			visible : boolean;
			width : any;
			horizontalWrap : boolean;
			zIndex : number;
			keepScreenOn : boolean;
			add (view: Titanium.UI.View) : void;
			add (view: Array<Titanium.UI.View>) : void;
			animate (animation: Titanium.UI.Animation, callback: (...args : any[]) => any) : void;
			animate (animation: Dictionary<Titanium.UI.Animation>, callback: (...args : any[]) => any) : void;
			finishLayout () : void;
			hide (options?: AnimationOption) : void;
			insertAt (params: Dictionary<Object>) : void;
			remove (view: Titanium.UI.View) : void;
			removeAllChildren () : void;
			replaceAt (params: Dictionary<Object>) : void;
			show (options?: AnimationOption) : void;
			startLayout () : void;
			toImage (callback?: (...args : any[]) => any, honorScaleFactor?: boolean) : Titanium.Blob;
			updateLayout (params: Dictionary<Object>) : void;
			convertPointToView (point: Point, destinationView: Titanium.UI.View) : Point;
			getAccessibilityHidden () : boolean;
			setAccessibilityHidden (accessibilityHidden: boolean) : void;
			getAccessibilityHint () : string;
			setAccessibilityHint (accessibilityHint: string) : void;
			getAccessibilityLabel () : string;
			setAccessibilityLabel (accessibilityLabel: string) : void;
			getAccessibilityValue () : string;
			setAccessibilityValue (accessibilityValue: string) : void;
			getAnchorPoint () : Point;
			setAnchorPoint (anchorPoint: Point) : void;
			getAnimatedCenter () : Point;
			getBackgroundColor () : string;
			setBackgroundColor (backgroundColor: string) : void;
			getBackgroundDisabledColor () : string;
			setBackgroundDisabledColor (backgroundDisabledColor: string) : void;
			getBackgroundDisabledImage () : string;
			setBackgroundDisabledImage (backgroundDisabledImage: string) : void;
			getBackgroundFocusedColor () : string;
			setBackgroundFocusedColor (backgroundFocusedColor: string) : void;
			getBackgroundFocusedImage () : string;
			setBackgroundFocusedImage (backgroundFocusedImage: string) : void;
			getBackgroundGradient () : Gradient;
			setBackgroundGradient (backgroundGradient: Gradient) : void;
			getBackgroundImage () : string;
			setBackgroundImage (backgroundImage: string) : void;
			getBackgroundRepeat () : boolean;
			setBackgroundRepeat (backgroundRepeat: boolean) : void;
			getBackgroundLeftCap () : number;
			setBackgroundLeftCap (backgroundLeftCap: number) : void;
			getBackgroundSelectedColor () : string;
			setBackgroundSelectedColor (backgroundSelectedColor: string) : void;
			getBackgroundSelectedImage () : string;
			setBackgroundSelectedImage (backgroundSelectedImage: string) : void;
			getBackgroundTopCap () : number;
			setBackgroundTopCap (backgroundTopCap: number) : void;
			getBorderColor () : string;
			setBorderColor (borderColor: string) : void;
			getBorderRadius () : number;
			setBorderRadius (borderRadius: number) : void;
			getBorderWidth () : number;
			setBorderWidth (borderWidth: number) : void;
			getBottom () : any;
			setBottom (bottom: number) : void;
			setBottom (bottom: string) : void;
			getCenter () : Point;
			setCenter (center: Point) : void;
			getChildren () : Array<Titanium.UI.View>;
			getClipMode () : number;
			setClipMode (clipMode: number) : void;
			getElevation () : number;
			setElevation (elevation: number) : void;
			getFocusable () : boolean;
			setFocusable (focusable: boolean) : void;
			getHeight () : any;
			setHeight (height: number) : void;
			setHeight (height: string) : void;
			getLeft () : any;
			setLeft (left: number) : void;
			setLeft (left: string) : void;
			getLayout () : string;
			setLayout (layout: string) : void;
			getOpacity () : number;
			setOpacity (opacity: number) : void;
			getOverrideCurrentAnimation () : boolean;
			setOverrideCurrentAnimation (overrideCurrentAnimation: boolean) : void;
			getPullBackgroundColor () : string;
			setPullBackgroundColor (pullBackgroundColor: string) : void;
			getPreviewContext () : Titanium.UI.View;
			setPreviewContext (previewContext: Titanium.UI.View) : void;
			getRight () : any;
			setRight (right: number) : void;
			setRight (right: string) : void;
			getRect () : Dimension;
			getSize () : Dimension;
			getSoftKeyboardOnFocus () : number;
			setSoftKeyboardOnFocus (softKeyboardOnFocus: number) : void;
			getTintColor () : string;
			setTintColor (tintColor: string) : void;
			getTop () : any;
			setTop (top: number) : void;
			setTop (top: string) : void;
			getTouchEnabled () : boolean;
			setTouchEnabled (touchEnabled: boolean) : void;
			getTransform () : any;
			setTransform (transform: Titanium.UI._2DMatrix) : void;
			setTransform (transform: Titanium.UI._3DMatrix) : void;
			getTranslationX () : number;
			setTranslationX (translationX: number) : void;
			getTranslationY () : number;
			setTranslationY (translationY: number) : void;
			getTranslationZ () : number;
			setTranslationZ (translationZ: number) : void;
			getTransitionName () : string;
			setTransitionName (transitionName: string) : void;
			getViewShadowRadius () : number;
			setViewShadowRadius (viewShadowRadius: number) : void;
			getViewShadowColor () : string;
			setViewShadowColor (viewShadowColor: string) : void;
			getViewShadowOffset () : Point;
			setViewShadowOffset (viewShadowOffset: Point) : void;
			getVisible () : boolean;
			setVisible (visible: boolean) : void;
			getWidth () : any;
			setWidth (width: number) : void;
			setWidth (width: string) : void;
			getHorizontalWrap () : boolean;
			setHorizontalWrap (horizontalWrap: boolean) : void;
			getZIndex () : number;
			setZIndex (zIndex: number) : void;
			getKeepScreenOn () : boolean;
			setKeepScreenOn (keepScreenOn: boolean) : void;
		}
		export interface _2DMatrix extends Titanium.Proxy {
			a : number;
			b : number;
			c : number;
			d : number;
			tx : number;
			ty : number;
			invert () : Titanium.UI._2DMatrix;
			multiply (t2: Titanium.UI._2DMatrix) : Titanium.UI._2DMatrix;
			rotate (angle: number, toAngle?: number) : Titanium.UI._2DMatrix;
			scale (sx: number, sy: number, toSx?: number, toSy?: number) : Titanium.UI._2DMatrix;
			translate (tx: number, ty: number) : Titanium.UI._2DMatrix;
			getA () : number;
			setA (a: number) : void;
			getB () : number;
			setB (b: number) : void;
			getC () : number;
			setC (c: number) : void;
			getD () : number;
			setD (d: number) : void;
			getTx () : number;
			setTx (tx: number) : void;
			getTy () : number;
			setTy (ty: number) : void;
		}
		export interface _3DMatrix extends Titanium.Proxy {
			m11 : number;
			m12 : number;
			m13 : number;
			m14 : number;
			m21 : number;
			m22 : number;
			m23 : number;
			m24 : number;
			m31 : number;
			m32 : number;
			m33 : number;
			m34 : number;
			m41 : number;
			m42 : number;
			m43 : number;
			m44 : number;
			invert () : Titanium.UI._3DMatrix;
			multiply (t2: Titanium.UI._3DMatrix) : Titanium.UI._3DMatrix;
			rotate (angle: number, x: number, y: number, z: number) : Titanium.UI._3DMatrix;
			scale (sx: number, sy: number, sz: number) : Titanium.UI._3DMatrix;
			translate (tx: number, ty: number, tz: number) : Titanium.UI._3DMatrix;
			getM11 () : number;
			setM11 (m11: number) : void;
			getM12 () : number;
			setM12 (m12: number) : void;
			getM13 () : number;
			setM13 (m13: number) : void;
			getM14 () : number;
			setM14 (m14: number) : void;
			getM21 () : number;
			setM21 (m21: number) : void;
			getM22 () : number;
			setM22 (m22: number) : void;
			getM23 () : number;
			setM23 (m23: number) : void;
			getM24 () : number;
			setM24 (m24: number) : void;
			getM31 () : number;
			setM31 (m31: number) : void;
			getM32 () : number;
			setM32 (m32: number) : void;
			getM33 () : number;
			setM33 (m33: number) : void;
			getM34 () : number;
			setM34 (m34: number) : void;
			getM41 () : number;
			setM41 (m41: number) : void;
			getM42 () : number;
			setM42 (m42: number) : void;
			getM43 () : number;
			setM43 (m43: number) : void;
			getM44 () : number;
			setM44 (m44: number) : void;
		}
		export interface ActivityIndicator extends Titanium.UI.View {
			height : string;
			width : string;
			color : string;
			font : Font;
			message : string;
			messageid : string;
			style : number;
			indicatorColor : string;
			indicatorDiameter : string;
			getHeight () : string;
			getWidth () : string;
			getColor () : string;
			setColor (color: string) : void;
			getFont () : Font;
			setFont (font: Font) : void;
			getMessage () : string;
			setMessage (message: string) : void;
			getMessageid () : string;
			setMessageid (messageid: string) : void;
			getStyle () : number;
			setStyle (style: number) : void;
			getIndicatorColor () : string;
			setIndicatorColor (indicatorColor: string) : void;
			getIndicatorDiameter () : string;
			setIndicatorDiameter (indicatorDiameter: string) : void;
		}
		export enum ActivityIndicatorStyle {
			BIG,
			DARK,
			BIG_DARK,
			PLAIN
		}
		export interface AlertDialog extends Titanium.UI.View {
			androidView : Titanium.UI.View;
			buttonNames : Array<String>;
			cancel : number;
			destructive : number;
			keyboardType : number;
			keyboardAppearance : number;
			loginPlaceholder : string;
			loginReturnKeyType : number;
			loginKeyboardType : number;
			message : string;
			messageid : string;
			ok : string;
			okid : string;
			passwordPlaceholder : string;
			passwordReturnKeyType : number;
			passwordKeyboardType : number;
			placeholder : string;
			persistent : boolean;
			returnKeyType : number;
			style : number;
			title : string;
			titleid : string;
			getButtonNames () : Array<String>;
			setButtonNames (buttonNames: Array<String>) : void;
			getCancel () : number;
			setCancel (cancel: number) : void;
			getDestructive () : number;
			setDestructive (destructive: number) : void;
			getKeyboardType () : number;
			setKeyboardType (keyboardType: number) : void;
			getKeyboardAppearance () : number;
			setKeyboardAppearance (keyboardAppearance: number) : void;
			getLoginPlaceholder () : string;
			setLoginPlaceholder (loginPlaceholder: string) : void;
			getLoginReturnKeyType () : number;
			setLoginReturnKeyType (loginReturnKeyType: number) : void;
			getLoginKeyboardType () : number;
			setLoginKeyboardType (loginKeyboardType: number) : void;
			getMessage () : string;
			setMessage (message: string) : void;
			getOk () : string;
			setOk (ok: string) : void;
			getPasswordPlaceholder () : string;
			setPasswordPlaceholder (passwordPlaceholder: string) : void;
			getPasswordReturnKeyType () : number;
			setPasswordReturnKeyType (passwordReturnKeyType: number) : void;
			getPasswordKeyboardType () : number;
			setPasswordKeyboardType (passwordKeyboardType: number) : void;
			getPlaceholder () : string;
			setPlaceholder (placeholder: string) : void;
			getPersistent () : boolean;
			setPersistent (persistent: boolean) : void;
			getReturnKeyType () : number;
			setReturnKeyType (returnKeyType: number) : void;
			getStyle () : number;
			setStyle (style: number) : void;
			getTitle () : string;
			setTitle (title: string) : void;
		}
		export module Android {
			export var bubbleParent : boolean;
			export var apiName : string;
			export var lifecycleContainer : any;
			export var LINKIFY_ALL : number;
			export var LINKIFY_EMAIL_ADDRESSES : number;
			export var LINKIFY_MAP_ADDRESSES : number;
			export var LINKIFY_PHONE_NUMBERS : number;
			export var LINKIFY_WEB_URLS : number;
			export var OVER_SCROLL_ALWAYS : number;
			export var OVER_SCROLL_IF_CONTENT_SCROLLS : number;
			export var OVER_SCROLL_NEVER : number;
			export var PIXEL_FORMAT_A_8 : number;
			export var PIXEL_FORMAT_LA_88 : number;
			export var PIXEL_FORMAT_L_8 : number;
			export var PIXEL_FORMAT_OPAQUE : number;
			export var PIXEL_FORMAT_RGBA_4444 : number;
			export var PIXEL_FORMAT_RGBA_5551 : number;
			export var PIXEL_FORMAT_RGBA_8888 : number;
			export var PIXEL_FORMAT_RGBX_8888 : number;
			export var PIXEL_FORMAT_RGB_332 : number;
			export var PIXEL_FORMAT_RGB_565 : number;
			export var PIXEL_FORMAT_RGB_888 : number;
			export var PIXEL_FORMAT_TRANSLUCENT : number;
			export var PIXEL_FORMAT_TRANSPARENT : number;
			export var PIXEL_FORMAT_UNKNOWN : number;
			export var PROGRESS_INDICATOR_DIALOG : number;
			export var PROGRESS_INDICATOR_STATUS_BAR : number;
			export var PROGRESS_INDICATOR_INDETERMINANT : number;
			export var PROGRESS_INDICATOR_DETERMINANT : number;
			export var SOFT_INPUT_ADJUST_PAN : number;
			export var SOFT_INPUT_ADJUST_RESIZE : number;
			export var SOFT_INPUT_ADJUST_UNSPECIFIED : number;
			export var SOFT_INPUT_STATE_ALWAYS_HIDDEN : number;
			export var SOFT_INPUT_STATE_ALWAYS_VISIBLE : number;
			export var SOFT_INPUT_STATE_HIDDEN : number;
			export var SOFT_INPUT_STATE_UNSPECIFIED : number;
			export var SOFT_INPUT_STATE_VISIBLE : number;
			export var SOFT_KEYBOARD_DEFAULT_ON_FOCUS : number;
			export var SOFT_KEYBOARD_HIDE_ON_FOCUS : number;
			export var SOFT_KEYBOARD_SHOW_ON_FOCUS : number;
			export var SWITCH_STYLE_CHECKBOX : number;
			export var SWITCH_STYLE_TOGGLEBUTTON : number;
			export var SWITCH_STYLE_SWITCH : number;
			export var WEBVIEW_PLUGINS_OFF : number;
			export var WEBVIEW_PLUGINS_ON : number;
			export var WEBVIEW_PLUGINS_ON_DEMAND : number;
			export var WEBVIEW_LOAD_DEFAULT : number;
			export var WEBVIEW_LOAD_NO_CACHE : number;
			export var WEBVIEW_LOAD_CACHE_ONLY : number;
			export var WEBVIEW_LOAD_CACHE_ELSE_NETWORK : number;
			export var TRANSITION_EXPLODE : number;
			export var TRANSITION_FADE_IN : number;
			export var TRANSITION_FADE_OUT : number;
			export var TRANSITION_SLIDE_TOP : number;
			export var TRANSITION_SLIDE_RIGHT : number;
			export var TRANSITION_SLIDE_BOTTOM : number;
			export var TRANSITION_SLIDE_LEFT : number;
			export var TRANSITION_CHANGE_BOUNDS : number;
			export var TRANSITION_CHANGE_CLIP_BOUNDS : number;
			export var TRANSITION_CHANGE_TRANSFORM : number;
			export var TRANSITION_CHANGE_IMAGE_TRANSFORM : number;
			export var TRANSITION_NONE : number;
			export function addEventListener (name: string, callback: (...args : any[]) => any) : void;
			export function removeEventListener (name: string, callback: (...args : any[]) => any) : void;
			export function fireEvent (name: string, event: Dictionary<Object>) : void;
			export function applyProperties (props: Dictionary<Object>) : void;
			export function hideSoftKeyboard () : void;
			export function openPreferences () : void;
			export function getBubbleParent () : boolean;
			export function setBubbleParent (bubbleParent: boolean) : void;
			export function getApiName () : string;
			export function getLifecycleContainer () : any;
			export function setLifecycleContainer (lifecycleContainer: Titanium.UI.Window) : void;
			export function setLifecycleContainer (lifecycleContainer: Titanium.UI.TabGroup) : void;
			export function createCardView (parameters?: Dictionary<Titanium.UI.Android.CardView>) : Titanium.UI.Android.CardView;
			export function createProgressIndicator (parameters?: Dictionary<Titanium.UI.Android.ProgressIndicator>) : Titanium.UI.Android.ProgressIndicator;
			export function createSearchView (parameters?: Dictionary<Titanium.UI.Android.SearchView>) : Titanium.UI.Android.SearchView;
			export interface CardView extends Titanium.UI.View {
				cardBackgroundColor : string;
				cardCornerRadius : number;
				cardElevation : number;
				cardMaxElevation : number;
				maxElevation : number;
				cardPreventCornerOverlap : boolean;
				preventCornerOverlap : boolean;
				cardUseCompatPadding : boolean;
				useCompatPadding : boolean;
				contentPadding : number;
				padding : number;
				contentPaddingBottom : number;
				paddingBottom : number;
				contentPaddingLeft : number;
				paddingLeft : number;
				contentPaddingRight : number;
				paddingRight : number;
				contentPaddingTop : number;
				paddingTop : number;
				getCardBackgroundColor () : string;
				setCardBackgroundColor (cardBackgroundColor: string) : void;
				getCardCornerRadius () : number;
				setCardCornerRadius (cardCornerRadius: number) : void;
				getCardElevation () : number;
				setCardElevation (cardElevation: number) : void;
				getCardMaxElevation () : number;
				setCardMaxElevation (cardMaxElevation: number) : void;
				getMaxElevation () : number;
				setMaxElevation (maxElevation: number) : void;
				getCardPreventCornerOverlap () : boolean;
				setCardPreventCornerOverlap (cardPreventCornerOverlap: boolean) : void;
				getPreventCornerOverlap () : boolean;
				setPreventCornerOverlap (preventCornerOverlap: boolean) : void;
				getCardUseCompatPadding () : boolean;
				setCardUseCompatPadding (cardUseCompatPadding: boolean) : void;
				getUseCompatPadding () : boolean;
				setUseCompatPadding (useCompatPadding: boolean) : void;
				getContentPadding () : number;
				setContentPadding (contentPadding: number) : void;
				getPadding () : number;
				setPadding (padding: number) : void;
				getContentPaddingBottom () : number;
				setContentPaddingBottom (contentPaddingBottom: number) : void;
				getPaddingBottom () : number;
				setPaddingBottom (paddingBottom: number) : void;
				getContentPaddingLeft () : number;
				setContentPaddingLeft (contentPaddingLeft: number) : void;
				getPaddingLeft () : number;
				setPaddingLeft (paddingLeft: number) : void;
				getContentPaddingRight () : number;
				setContentPaddingRight (contentPaddingRight: number) : void;
				getPaddingRight () : number;
				setPaddingRight (paddingRight: number) : void;
				getContentPaddingTop () : number;
				setContentPaddingTop (contentPaddingTop: number) : void;
				getPaddingTop () : number;
				setPaddingTop (paddingTop: number) : void;
			}
			export interface ProgressIndicator extends Titanium.UI.View {
				cancelable : boolean;
				canceledOnTouchOutside : boolean;
				message : string;
				messageid : string;
				min : number;
				max : number;
				location : number;
				type : number;
				getCancelable () : boolean;
				setCancelable (cancelable: boolean) : void;
				getCanceledOnTouchOutside () : boolean;
				setCanceledOnTouchOutside (canceledOnTouchOutside: boolean) : void;
				getMessage () : string;
				setMessage (message: string) : void;
				getMessageid () : string;
				setMessageid (messageid: string) : void;
				getMin () : number;
				setMin (min: number) : void;
				getMax () : number;
				setMax (max: number) : void;
				getLocation () : number;
				setLocation (location: number) : void;
				getType () : number;
				setType (type: number) : void;
			}
			export interface SearchView extends Titanium.UI.View {
				color : string;
				hintText : string;
				value : string;
				iconified : boolean;
				iconifiedByDefault : boolean;
				submitEnabled : boolean;
				blur () : void;
				focus () : void;
				getColor () : string;
				setColor (color: string) : void;
				getHintText () : string;
				setHintText (hintText: string) : void;
				getValue () : string;
				setValue (value: string) : void;
				getIconified () : boolean;
				setIconified (iconified: boolean) : void;
				getIconifiedByDefault () : boolean;
				setIconifiedByDefault (iconifiedByDefault: boolean) : void;
				getSubmitEnabled () : boolean;
				setSubmitEnabled (submitEnabled: boolean) : void;
			}
		}
		export interface Animation extends Titanium.Proxy {
			anchorPoint : Point;
			autoreverse : boolean;
			backgroundColor : string;
			bottom : number;
			center : any;
			color : string;
			curve : number;
			delay : number;
			duration : number;
			height : number;
			left : number;
			opacity : number;
			opaque : boolean;
			repeat : number;
			right : number;
			top : number;
			transform : any;
			transition : number;
			view : Titanium.UI.View;
			visible : boolean;
			width : number;
			zIndex : number;
			getAnchorPoint () : Point;
			setAnchorPoint (anchorPoint: Point) : void;
			getAutoreverse () : boolean;
			setAutoreverse (autoreverse: boolean) : void;
			getBackgroundColor () : string;
			setBackgroundColor (backgroundColor: string) : void;
			getBottom () : number;
			setBottom (bottom: number) : void;
			getCenter () : any;
			setCenter (center: any) : void;
			getColor () : string;
			setColor (color: string) : void;
			getCurve () : number;
			setCurve (curve: number) : void;
			getDelay () : number;
			setDelay (delay: number) : void;
			getDuration () : number;
			setDuration (duration: number) : void;
			getHeight () : number;
			setHeight (height: number) : void;
			getLeft () : number;
			setLeft (left: number) : void;
			getOpacity () : number;
			setOpacity (opacity: number) : void;
			getOpaque () : boolean;
			setOpaque (opaque: boolean) : void;
			getRepeat () : number;
			setRepeat (repeat: number) : void;
			getRight () : number;
			setRight (right: number) : void;
			getTop () : number;
			setTop (top: number) : void;
			getTransform () : any;
			setTransform (transform: Titanium.UI._2DMatrix) : void;
			setTransform (transform: Titanium.UI._3DMatrix) : void;
			getTransition () : number;
			setTransition (transition: number) : void;
			getView () : Titanium.UI.View;
			setView (view: Titanium.UI.View) : void;
			getVisible () : boolean;
			setVisible (visible: boolean) : void;
			getWidth () : number;
			setWidth (width: number) : void;
			getZIndex () : number;
			setZIndex (zIndex: number) : void;
		}
		export interface AttributedString extends Titanium.Proxy {
			text : string;
			attributes : Array<Attribute>;
			addAttribute (attribute: Attribute) : void;
			getText () : string;
			setText (text: string) : void;
			getAttributes () : Array<Attribute>;
			setAttributes (attributes: Array<Attribute>) : void;
		}
		export interface Button extends Titanium.UI.View {
			color : string;
			disabledColor : string;
			enabled : boolean;
			font : Font;
			image : any;
			selectedColor : string;
			shadowColor : string;
			shadowOffset : Dictionary<Object>;
			shadowRadius : number;
			style : number;
			systemButton : number;
			textAlign : any;
			title : string;
			titleid : string;
			verticalAlign : any;
			getColor () : string;
			setColor (color: string) : void;
			getDisabledColor () : string;
			setDisabledColor (disabledColor: string) : void;
			getEnabled () : boolean;
			setEnabled (enabled: boolean) : void;
			getFont () : Font;
			setFont (font: Font) : void;
			getImage () : any;
			setImage (image: string) : void;
			setImage (image: Titanium.Blob) : void;
			getSelectedColor () : string;
			setSelectedColor (selectedColor: string) : void;
			getShadowColor () : string;
			setShadowColor (shadowColor: string) : void;
			getShadowOffset () : Dictionary<Object>;
			setShadowOffset (shadowOffset: Dictionary<Object>) : void;
			getShadowRadius () : number;
			setShadowRadius (shadowRadius: number) : void;
			getStyle () : number;
			setStyle (style: number) : void;
			getSystemButton () : number;
			setSystemButton (systemButton: number) : void;
			getTextAlign () : any;
			setTextAlign (textAlign: string) : void;
			setTextAlign (textAlign: number) : void;
			getTitle () : string;
			setTitle (title: string) : void;
			getTitleid () : string;
			setTitleid (titleid: string) : void;
			getVerticalAlign () : any;
			setVerticalAlign (verticalAlign: number) : void;
			setVerticalAlign (verticalAlign: string) : void;
		}
		export interface ButtonBar extends Titanium.UI.View {
			index : number;
			labels : any;
			style : number;
			getIndex () : number;
			setIndex (index: number) : void;
			getLabels () : any;
			setLabels (labels: Array<String>) : void;
			setLabels (labels: Array<BarItemType>) : void;
			getStyle () : number;
			setStyle (style: number) : void;
		}
		export interface Clipboard  {
			clearData (type?: string) : void;
			clearText () : void;
			getData (type: string) : any;
			getText () : string;
			hasData (type: string) : boolean;
			hasText () : any;
			setData (type: string, data: any) : void;
			setText (text: string) : void;
		}
		export interface CoverFlowView extends Titanium.UI.View {
			images : any;
			selected : number;
			setImage (index: number, image: string) : void;
			setImage (image: Titanium.Blob) : void;
			setImage (image: Titanium.Filesystem.File) : void;
			setImage (index: number, image: CoverFlowImageType) : void;
			getImages () : any;
			setImages (images: Array<String>) : void;
			setImages (images: Array<Titanium.Blob>) : void;
			setImages (images: Array<Titanium.Filesystem.File>) : void;
			setImages (images: Array<CoverFlowImageType>) : void;
			getSelected () : number;
			setSelected (selected: number) : void;
		}
		export interface DashboardItem extends Titanium.Proxy {
			badge : number;
			canDelete : boolean;
			image : any;
			selectedImage : any;
			getBadge () : number;
			setBadge (badge: number) : void;
			getCanDelete () : boolean;
			setCanDelete (canDelete: boolean) : void;
			getImage () : any;
			setImage (image: string) : void;
			setImage (image: Titanium.Blob) : void;
			getSelectedImage () : any;
			setSelectedImage (selectedImage: string) : void;
			setSelectedImage (selectedImage: Titanium.Blob) : void;
		}
		export interface DashboardView extends Titanium.UI.View {
			columnCount : number;
			rowCount : number;
			data : Array<Titanium.UI.DashboardItem>;
			editable : boolean;
			wobble : boolean;
			startEditing () : void;
			stopEditing () : void;
			getColumnCount () : number;
			setColumnCount (columnCount: number) : void;
			getRowCount () : number;
			setRowCount (rowCount: number) : void;
			getData () : Array<Titanium.UI.DashboardItem>;
			setData (data: Array<Titanium.UI.DashboardItem>) : void;
			getEditable () : boolean;
			setEditable (editable: boolean) : void;
			getWobble () : boolean;
			setWobble (wobble: boolean) : void;
		}
		export interface EmailDialog extends Titanium.UI.View {
			CANCELLED : number;
			FAILED : number;
			SAVED : number;
			SENT : number;
			barColor : string;
			bccRecipients : Array<String>;
			ccRecipients : Array<String>;
			html : boolean;
			messageBody : string;
			subject : string;
			toRecipients : Array<String>;
			addAttachment (attachment: Titanium.Blob) : void;
			addAttachment (attachment: Titanium.Filesystem.File) : void;
			isSupported () : boolean;
			open (properties: any) : void;
			getBarColor () : string;
			setBarColor (barColor: string) : void;
			getBccRecipients () : Array<String>;
			setBccRecipients (bccRecipients: Array<String>) : void;
			getCcRecipients () : Array<String>;
			setCcRecipients (ccRecipients: Array<String>) : void;
			getHtml () : boolean;
			setHtml (html: boolean) : void;
			getMessageBody () : string;
			setMessageBody (messageBody: string) : void;
			getSubject () : string;
			setSubject (subject: string) : void;
			getToRecipients () : Array<String>;
			setToRecipients (toRecipients: Array<String>) : void;
		}
		export interface ImageView extends Titanium.UI.View {
			animating : boolean;
			autorotate : boolean;
			decodeRetries : number;
			defaultImage : string;
			duration : number;
			enableZoomControls : boolean;
			hires : boolean;
			image : any;
			images : any;
			paused : boolean;
			preventDefaultImage : boolean;
			repeatCount : number;
			reverse : boolean;
			url : string;
			pause () : void;
			resume () : void;
			start () : void;
			stop () : void;
			toBlob () : Titanium.Blob;
			getAnimating () : boolean;
			getAutorotate () : boolean;
			setAutorotate (autorotate: boolean) : void;
			getDecodeRetries () : number;
			setDecodeRetries (decodeRetries: number) : void;
			getDefaultImage () : string;
			setDefaultImage (defaultImage: string) : void;
			getDuration () : number;
			setDuration (duration: number) : void;
			getEnableZoomControls () : boolean;
			setEnableZoomControls (enableZoomControls: boolean) : void;
			getHires () : boolean;
			setHires (hires: boolean) : void;
			getImage () : any;
			setImage (image: string) : void;
			setImage (image: Titanium.Blob) : void;
			setImage (image: Titanium.Filesystem.File) : void;
			getImages () : any;
			setImages (images: Array<String>) : void;
			setImages (images: Array<Titanium.Blob>) : void;
			setImages (images: Array<Titanium.Filesystem.File>) : void;
			getPaused () : boolean;
			getPreventDefaultImage () : boolean;
			setPreventDefaultImage (preventDefaultImage: boolean) : void;
			getRepeatCount () : number;
			setRepeatCount (repeatCount: number) : void;
			getReverse () : boolean;
			setReverse (reverse: boolean) : void;
			getUrl () : string;
			setUrl (url: string) : void;
		}
		export interface Label extends Titanium.UI.View {
			attributedString : Titanium.UI.AttributedString;
			autoLink : number;
			backgroundPaddingBottom : number;
			backgroundPaddingLeft : number;
			backgroundPaddingRight : number;
			backgroundPaddingTop : number;
			color : string;
			ellipsize : any;
			font : Font;
			highlightedColor : string;
			html : string;
			includeFontPadding : boolean;
			lines : number;
			maxLines : number;
			minimumFontSize : number;
			shadowColor : string;
			shadowOffset : Dictionary<Object>;
			shadowRadius : number;
			text : string;
			textAlign : any;
			textid : string;
			wordWrap : boolean;
			verticalAlign : any;
			getAttributedString () : Titanium.UI.AttributedString;
			setAttributedString (attributedString: Titanium.UI.AttributedString) : void;
			getAutoLink () : number;
			setAutoLink (autoLink: number) : void;
			getBackgroundPaddingBottom () : number;
			setBackgroundPaddingBottom (backgroundPaddingBottom: number) : void;
			getBackgroundPaddingLeft () : number;
			setBackgroundPaddingLeft (backgroundPaddingLeft: number) : void;
			getBackgroundPaddingRight () : number;
			setBackgroundPaddingRight (backgroundPaddingRight: number) : void;
			getBackgroundPaddingTop () : number;
			setBackgroundPaddingTop (backgroundPaddingTop: number) : void;
			getColor () : string;
			setColor (color: string) : void;
			getEllipsize () : any;
			setEllipsize (ellipsize: number) : void;
			setEllipsize (ellipsize: boolean) : void;
			getFont () : Font;
			setFont (font: Font) : void;
			getHighlightedColor () : string;
			setHighlightedColor (highlightedColor: string) : void;
			getHtml () : string;
			setHtml (html: string) : void;
			getIncludeFontPadding () : boolean;
			setIncludeFontPadding (includeFontPadding: boolean) : void;
			getLines () : number;
			setLines (lines: number) : void;
			getMaxLines () : number;
			setMaxLines (maxLines: number) : void;
			getMinimumFontSize () : number;
			setMinimumFontSize (minimumFontSize: number) : void;
			getShadowColor () : string;
			setShadowColor (shadowColor: string) : void;
			getShadowOffset () : Dictionary<Object>;
			setShadowOffset (shadowOffset: Dictionary<Object>) : void;
			getShadowRadius () : number;
			setShadowRadius (shadowRadius: number) : void;
			getText () : string;
			setText (text: string) : void;
			getTextAlign () : any;
			setTextAlign (textAlign: string) : void;
			setTextAlign (textAlign: number) : void;
			getTextid () : string;
			setTextid (textid: string) : void;
			getWordWrap () : boolean;
			setWordWrap (wordWrap: boolean) : void;
			getVerticalAlign () : any;
			setVerticalAlign (verticalAlign: number) : void;
			setVerticalAlign (verticalAlign: string) : void;
		}
		export interface ListItem extends Titanium.Proxy {
			itemId : string;
			accessoryType : number;
			backgroundColor : string;
			backgroundImage : string;
			backgroundGradient : Gradient;
			selectedBackgroundColor : string;
			selectedBackgroundImage : string;
			selectedBackgroundGradient : Gradient;
			canEdit : boolean;
			canInsert : boolean;
			canMove : boolean;
			editActions : Array<RowActionType>;
			searchableText : string;
			color : string;
			font : Font;
			height : any;
			image : string;
			title : string;
			selectionStyle : number;
			subtitle : string;
			getEditActions () : Array<RowActionType>;
			setEditActions (editActions: Array<RowActionType>) : void;
		}
		export interface ListSection extends Titanium.Proxy {
			footerTitle : string;
			footerView : Titanium.UI.View;
			headerTitle : string;
			headerView : Titanium.UI.View;
			items : Array<ListDataItem>;
			setItems (dataItems: Array<ListDataItem>, animation?: ListViewAnimationProperties) : void;
			appendItems (dataItems: Array<ListDataItem>, animation?: ListViewAnimationProperties) : void;
			insertItemsAt (itemIndex: number, dataItems: Array<ListDataItem>, animation?: ListViewAnimationProperties) : void;
			replaceItemsAt (index: number, count: number, dataItems: Array<ListDataItem>, animation?: ListViewAnimationProperties) : void;
			deleteItemsAt (itemIndex: number, count: number, animation?: ListViewAnimationProperties) : void;
			getItemAt (itemIndex: number) : ListDataItem;
			updateItemAt (index: number, dataItem: ListDataItem, animation?: ListViewAnimationProperties) : void;
			getFooterTitle () : string;
			setFooterTitle (footerTitle: string) : void;
			getFooterView () : Titanium.UI.View;
			setFooterView (footerView: Titanium.UI.View) : void;
			getHeaderTitle () : string;
			setHeaderTitle (headerTitle: string) : void;
			getHeaderView () : Titanium.UI.View;
			setHeaderView (headerView: Titanium.UI.View) : void;
			getItems () : Array<ListDataItem>;
		}
		export interface ListView extends Titanium.UI.View {
			allowsSelection : boolean;
			canScroll : boolean;
			editing : boolean;
			lazyLoadingEnabled : boolean;
			pruneSectionsOnEdit : boolean;
			templates : Dictionary<Object>;
			sections : Array<Titanium.UI.ListSection>;
			defaultItemTemplate : any;
			separatorHeight : any;
			footerDividersEnabled : boolean;
			footerTitle : string;
			footerView : Titanium.UI.View;
			headerDividersEnabled : boolean;
			headerTitle : string;
			headerView : Titanium.UI.View;
			pullView : Titanium.UI.View;
			refreshControl : Titanium.UI.RefreshControl;
			searchView : any;
			searchText : string;
			caseInsensitiveSearch : boolean;
			keepSectionsInSearch : boolean;
			sectionIndexTitles : Array<ListViewIndexEntry>;
			scrollIndicatorStyle : number;
			willScrollOnStatusTap : boolean;
			sectionCount : number;
			showVerticalScrollIndicator : boolean;
			separatorColor : string;
			separatorInsets : Dictionary<Object>;
			separatorStyle : number;
			style : number;
			scrollToItem (sectionIndex: number, itemIndex: number, animation?: ListViewAnimationProperties) : void;
			deselectItem (sectionIndex: number, itemIndex: number) : void;
			appendSection (section: Titanium.UI.ListSection, animation?: ListViewAnimationProperties) : void;
			appendSection (section: Array<Titanium.UI.ListSection>, animation?: ListViewAnimationProperties) : void;
			deleteSectionAt (sectionIndex: number, animation?: ListViewAnimationProperties) : void;
			insertSectionAt (sectionIndex: number, section: Titanium.UI.ListSection, animation?: ListViewAnimationProperties) : void;
			insertSectionAt (sectionIndex: number, section: Array<Titanium.UI.ListSection>, animation?: ListViewAnimationProperties) : void;
			replaceSectionAt (sectionIndex: number, section: Titanium.UI.ListSection, animation: ListViewAnimationProperties) : void;
			selectItem (sectionIndex: number, itemIndex: number) : void;
			setContentInsets (edgeInsets: ListViewEdgeInsets, animated?: ListViewContentInsetOption) : void;
			setContentOffset (contentOffset: Dictionary<Object>) : void;
			setMarker (markerProps: ListViewMarkerProps) : void;
			addMarker (markerProps: ListViewMarkerProps) : void;
			getAllowsSelection () : boolean;
			setAllowsSelection (allowsSelection: boolean) : void;
			getCanScroll () : boolean;
			setCanScroll (canScroll: boolean) : void;
			getEditing () : boolean;
			setEditing (editing: boolean) : void;
			getLazyLoadingEnabled () : boolean;
			setLazyLoadingEnabled (lazyLoadingEnabled: boolean) : void;
			getPruneSectionsOnEdit () : boolean;
			setPruneSectionsOnEdit (pruneSectionsOnEdit: boolean) : void;
			getTemplates () : Dictionary<Object>;
			setTemplates (templates: Dictionary<Object>) : void;
			getSections () : Array<Titanium.UI.ListSection>;
			setSections (sections: Array<Titanium.UI.ListSection>) : void;
			getDefaultItemTemplate () : any;
			setDefaultItemTemplate (defaultItemTemplate: string) : void;
			setDefaultItemTemplate (defaultItemTemplate: number) : void;
			getSeparatorHeight () : any;
			setSeparatorHeight (separatorHeight: string) : void;
			setSeparatorHeight (separatorHeight: number) : void;
			getFooterDividersEnabled () : boolean;
			setFooterDividersEnabled (footerDividersEnabled: boolean) : void;
			getFooterTitle () : string;
			setFooterTitle (footerTitle: string) : void;
			getFooterView () : Titanium.UI.View;
			setFooterView (footerView: Titanium.UI.View) : void;
			getHeaderDividersEnabled () : boolean;
			setHeaderDividersEnabled (headerDividersEnabled: boolean) : void;
			getHeaderTitle () : string;
			setHeaderTitle (headerTitle: string) : void;
			getHeaderView () : Titanium.UI.View;
			setHeaderView (headerView: Titanium.UI.View) : void;
			getPullView () : Titanium.UI.View;
			setPullView (pullView: Titanium.UI.View) : void;
			getRefreshControl () : Titanium.UI.RefreshControl;
			setRefreshControl (refreshControl: Titanium.UI.RefreshControl) : void;
			getSearchView () : any;
			setSearchView (searchView: Titanium.UI.SearchBar) : void;
			setSearchView (searchView: Titanium.UI.Android.SearchView) : void;
			getSearchText () : string;
			setSearchText (searchText: string) : void;
			getCaseInsensitiveSearch () : boolean;
			setCaseInsensitiveSearch (caseInsensitiveSearch: boolean) : void;
			getKeepSectionsInSearch () : boolean;
			setKeepSectionsInSearch (keepSectionsInSearch: boolean) : void;
			getSectionIndexTitles () : Array<ListViewIndexEntry>;
			setSectionIndexTitles (sectionIndexTitles: Array<ListViewIndexEntry>) : void;
			getScrollIndicatorStyle () : number;
			setScrollIndicatorStyle (scrollIndicatorStyle: number) : void;
			getWillScrollOnStatusTap () : boolean;
			setWillScrollOnStatusTap (willScrollOnStatusTap: boolean) : void;
			getSectionCount () : number;
			getShowVerticalScrollIndicator () : boolean;
			setShowVerticalScrollIndicator (showVerticalScrollIndicator: boolean) : void;
			getSeparatorColor () : string;
			setSeparatorColor (separatorColor: string) : void;
			getSeparatorInsets () : Dictionary<Object>;
			setSeparatorInsets (separatorInsets: Dictionary<Object>) : void;
			getSeparatorStyle () : number;
			setSeparatorStyle (separatorStyle: number) : void;
			getStyle () : number;
			setStyle (style: number) : void;
		}
		export interface MaskedImage extends Titanium.UI.View {
			mask : string;
			image : string;
			mode : number;
			tint : string;
			getMask () : string;
			setMask (mask: string) : void;
			getImage () : string;
			setImage (image: string) : void;
			getMode () : number;
			setMode (mode: number) : void;
			getTint () : string;
			setTint (tint: string) : void;
		}
		export module MobileWeb {
			export var apiName : string;
			export function addEventListener (name: string, callback: (...args : any[]) => any) : void;
			export function removeEventListener (name: string, callback: (...args : any[]) => any) : void;
			export function fireEvent (name: string, event: Dictionary<Object>) : void;
			export function applyProperties (props: Dictionary<Object>) : void;
			export function getApiName () : string;
			export function createNavigationGroup (parameters?: Dictionary<Titanium.UI.MobileWeb.NavigationGroup>) : Titanium.UI.MobileWeb.NavigationGroup;
			export interface NavigationGroup extends Titanium.UI.View {
				window : Titanium.UI.Window;
				navBarAtTop : boolean;
				close (window: Titanium.UI.Window, options: Dictionary<Object>) : void;
				open (window: Titanium.UI.Window, options: Dictionary<Object>) : void;
				getWindow () : Titanium.UI.Window;
				setWindow (window: Titanium.UI.Window) : void;
				getNavBarAtTop () : boolean;
				setNavBarAtTop (navBarAtTop: boolean) : void;
			}
			export enum TableViewSeparatorStyle {
				NONE,
				SINGLE_LINE
			}
		}
		export interface Notification extends Titanium.UI.View {
			message : string;
			duration : number;
			xOffset : number;
			yOffset : number;
			horizontalMargin : number;
			verticalMargin : number;
			getMessage () : string;
			setMessage (message: string) : void;
			getDuration () : number;
			setDuration (duration: number) : void;
			getXOffset () : number;
			setXOffset (xOffset: number) : void;
			getYOffset () : number;
			setYOffset (yOffset: number) : void;
			getHorizontalMargin () : number;
			setHorizontalMargin (horizontalMargin: number) : void;
			getVerticalMargin () : number;
			setVerticalMargin (verticalMargin: number) : void;
		}
		export interface OptionDialog extends Titanium.UI.View {
			androidView : Titanium.UI.View;
			buttonNames : Array<String>;
			cancel : number;
			destructive : number;
			options : Array<String>;
			opaquebackground : boolean;
			persistent : boolean;
			selectedIndex : number;
			title : string;
			titleid : string;
			hide (params?: hideParams) : void;
			show (params?: showParams) : void;
			getAndroidView () : Titanium.UI.View;
			setAndroidView (androidView: Titanium.UI.View) : void;
			getButtonNames () : Array<String>;
			setButtonNames (buttonNames: Array<String>) : void;
			getCancel () : number;
			setCancel (cancel: number) : void;
			getDestructive () : number;
			setDestructive (destructive: number) : void;
			getOptions () : Array<String>;
			setOptions (options: Array<String>) : void;
			getOpaquebackground () : boolean;
			setOpaquebackground (opaquebackground: boolean) : void;
			getPersistent () : boolean;
			setPersistent (persistent: boolean) : void;
			getSelectedIndex () : number;
			setSelectedIndex (selectedIndex: number) : void;
			getTitle () : string;
			setTitle (title: string) : void;
			getTitleid () : string;
			setTitleid (titleid: string) : void;
		}
		export interface Picker extends Titanium.UI.View {
			columns : Array<Titanium.UI.PickerColumn>;
			countDownDuration : number;
			dateTimeColor : string;
			format24 : boolean;
			locale : string;
			maxDate : Date;
			minDate : Date;
			minuteInterval : number;
			selectionIndicator : boolean;
			selectionOpens : boolean;
			type : number;
			useSpinner : boolean;
			value : Date;
			visibleItems : number;
			calendarViewShown : boolean;
			font : Font;
			add (data: Array<Titanium.UI.PickerRow>) : void;
			add (data: Titanium.UI.PickerRow) : void;
			add (data: Array<Titanium.UI.PickerColumn>) : void;
			add (data: Titanium.UI.PickerColumn) : void;
			getSelectedRow (index: number) : Titanium.UI.PickerRow;
			reloadColumn (column: Titanium.UI.PickerColumn) : void;
			setSelectedRow (column: number, row: number, animated?: boolean) : void;
			setValue (date: any, suppressEvent: boolean) : Titanium.UI.PickerRow;
			showDatePickerDialog (dictObj: any) : void;
			showTimePickerDialog (dictObj: any) : void;
			getColumns () : Array<Titanium.UI.PickerColumn>;
			setColumns (columns: Array<Titanium.UI.PickerColumn>) : void;
			getCountDownDuration () : number;
			setCountDownDuration (countDownDuration: number) : void;
			getDateTimeColor () : string;
			setDateTimeColor (dateTimeColor: string) : void;
			getFormat24 () : boolean;
			setFormat24 (format24: boolean) : void;
			getLocale () : string;
			setLocale (locale: string) : void;
			getMaxDate () : Date;
			setMaxDate (maxDate: Date) : void;
			getMinDate () : Date;
			setMinDate (minDate: Date) : void;
			getMinuteInterval () : number;
			setMinuteInterval (minuteInterval: number) : void;
			getSelectionIndicator () : boolean;
			setSelectionIndicator (selectionIndicator: boolean) : void;
			getSelectionOpens () : boolean;
			setSelectionOpens (selectionOpens: boolean) : void;
			getType () : number;
			setType (type: number) : void;
			getUseSpinner () : boolean;
			setUseSpinner (useSpinner: boolean) : void;
			getValue () : Date;
			setValue (value: Date) : void;
			getVisibleItems () : number;
			setVisibleItems (visibleItems: number) : void;
			getCalendarViewShown () : boolean;
			setCalendarViewShown (calendarViewShown: boolean) : void;
			getFont () : Font;
			setFont (font: Font) : void;
		}
		export interface PickerColumn extends Titanium.UI.View {
			rowCount : number;
			rows : Array<Titanium.UI.PickerRow>;
			selectedRow : Titanium.UI.PickerRow;
			font : Font;
			addRow (row: Titanium.UI.PickerRow) : void;
			removeRow (row: Titanium.UI.PickerRow) : void;
			getRowCount () : number;
			getRows () : Array<Titanium.UI.PickerRow>;
			getSelectedRow () : Titanium.UI.PickerRow;
			setSelectedRow (selectedRow: Titanium.UI.PickerRow) : void;
			getFont () : Font;
			setFont (font: Font) : void;
		}
		export interface PickerRow extends Titanium.UI.View {
			color : string;
			font : Font;
			title : string;
			getColor () : string;
			setColor (color: string) : void;
			getFont () : Font;
			setFont (font: Font) : void;
			getTitle () : string;
			setTitle (title: string) : void;
		}
		export interface ProgressBar extends Titanium.UI.View {
			color : string;
			font : Font;
			max : number;
			message : string;
			trackTintColor : string;
			min : number;
			style : number;
			value : number;
			getColor () : string;
			setColor (color: string) : void;
			getFont () : Font;
			setFont (font: Font) : void;
			getMax () : number;
			setMax (max: number) : void;
			getMessage () : string;
			setMessage (message: string) : void;
			getTrackTintColor () : string;
			setTrackTintColor (trackTintColor: string) : void;
			getMin () : number;
			setMin (min: number) : void;
			getStyle () : number;
			setStyle (style: number) : void;
			getValue () : number;
			setValue (value: number) : void;
		}
		export interface RefreshControl extends Titanium.Proxy {
			title : Titanium.UI.AttributedString;
			tintColor : string;
			beginRefreshing () : void;
			endRefreshing () : void;
			getTitle () : Titanium.UI.AttributedString;
			setTitle (title: Titanium.UI.AttributedString) : void;
			getTintColor () : string;
			setTintColor (tintColor: string) : void;
		}
		export interface ScrollView extends Titanium.UI.View {
			canCancelEvents : boolean;
			contentHeight : any;
			contentOffset : Dictionary<Object>;
			contentWidth : any;
			decelerationRate : number;
			disableBounce : boolean;
			horizontalBounce : boolean;
			maxZoomScale : number;
			minZoomScale : number;
			overScrollMode : number;
			scrollsToTop : boolean;
			scrollIndicatorStyle : number;
			scrollType : string;
			scrollingEnabled : boolean;
			showHorizontalScrollIndicator : boolean;
			showVerticalScrollIndicator : boolean;
			verticalBounce : boolean;
			zoomScale : number;
			scrollTo (x: number, y: number) : void;
			setContentOffset (contentOffset: Dictionary<Object>, animated?: contentOffsetOption) : void;
			setZoomScale (zoomScale: number, animated?: zoomScaleOption) : void;
			scrollToBottom () : void;
			getCanCancelEvents () : boolean;
			setCanCancelEvents (canCancelEvents: boolean) : void;
			getContentHeight () : any;
			setContentHeight (contentHeight: number) : void;
			setContentHeight (contentHeight: string) : void;
			getContentOffset () : Dictionary<Object>;
			setContentOffset (contentOffset: Dictionary<Object>) : void;
			getContentWidth () : any;
			setContentWidth (contentWidth: number) : void;
			setContentWidth (contentWidth: string) : void;
			getDecelerationRate () : number;
			setDecelerationRate (decelerationRate: number) : void;
			getDisableBounce () : boolean;
			setDisableBounce (disableBounce: boolean) : void;
			getHorizontalBounce () : boolean;
			setHorizontalBounce (horizontalBounce: boolean) : void;
			getMaxZoomScale () : number;
			setMaxZoomScale (maxZoomScale: number) : void;
			getMinZoomScale () : number;
			setMinZoomScale (minZoomScale: number) : void;
			getOverScrollMode () : number;
			setOverScrollMode (overScrollMode: number) : void;
			getScrollsToTop () : boolean;
			setScrollsToTop (scrollsToTop: boolean) : void;
			getScrollIndicatorStyle () : number;
			setScrollIndicatorStyle (scrollIndicatorStyle: number) : void;
			getScrollType () : string;
			setScrollType (scrollType: string) : void;
			getScrollingEnabled () : boolean;
			setScrollingEnabled (scrollingEnabled: boolean) : void;
			getShowHorizontalScrollIndicator () : boolean;
			setShowHorizontalScrollIndicator (showHorizontalScrollIndicator: boolean) : void;
			getShowVerticalScrollIndicator () : boolean;
			setShowVerticalScrollIndicator (showVerticalScrollIndicator: boolean) : void;
			getVerticalBounce () : boolean;
			setVerticalBounce (verticalBounce: boolean) : void;
			getZoomScale () : number;
		}
		export interface ScrollableView extends Titanium.UI.View {
			cacheSize : number;
			currentPage : number;
			disableBounce : boolean;
			overScrollMode : number;
			pagingControlColor : string;
			pagingControlHeight : number;
			showPagingControl : boolean;
			pagingControlTimeout : number;
			pagingControlAlpha : number;
			pagingControlOnTop : boolean;
			overlayEnabled : boolean;
			scrollingEnabled : boolean;
			views : Array<Titanium.UI.View>;
			clipViews : boolean;
			hitRect : Dimension;
			addView (view: Titanium.UI.View) : void;
			moveNext () : void;
			movePrevious () : void;
			removeView (view: number) : void;
			removeView (view: Titanium.UI.View) : void;
			scrollToView (view: number) : void;
			scrollToView (view: Titanium.UI.View) : void;
			getCacheSize () : number;
			setCacheSize (cacheSize: number) : void;
			getCurrentPage () : number;
			setCurrentPage (currentPage: number) : void;
			getDisableBounce () : boolean;
			setDisableBounce (disableBounce: boolean) : void;
			getOverScrollMode () : number;
			setOverScrollMode (overScrollMode: number) : void;
			getPagingControlColor () : string;
			setPagingControlColor (pagingControlColor: string) : void;
			getPagingControlHeight () : number;
			setPagingControlHeight (pagingControlHeight: number) : void;
			getShowPagingControl () : boolean;
			setShowPagingControl (showPagingControl: boolean) : void;
			getPagingControlTimeout () : number;
			setPagingControlTimeout (pagingControlTimeout: number) : void;
			getPagingControlAlpha () : number;
			setPagingControlAlpha (pagingControlAlpha: number) : void;
			getPagingControlOnTop () : boolean;
			setPagingControlOnTop (pagingControlOnTop: boolean) : void;
			getOverlayEnabled () : boolean;
			setOverlayEnabled (overlayEnabled: boolean) : void;
			getScrollingEnabled () : boolean;
			setScrollingEnabled (scrollingEnabled: boolean) : void;
			getViews () : Array<Titanium.UI.View>;
			setViews (views: Array<Titanium.UI.View>) : void;
			getClipViews () : boolean;
			setClipViews (clipViews: boolean) : void;
			getHitRect () : Dimension;
			setHitRect (hitRect: Dimension) : void;
		}
		export interface SearchBar extends Titanium.UI.View {
			autocapitalization : number;
			autocorrect : boolean;
			barColor : string;
			cancelButtonTitle : string;
			hintText : string;
			hinttextid : string;
			keyboardType : number;
			keyboardAppearance : number;
			prompt : string;
			promptid : string;
			showBookmark : boolean;
			showCancel : boolean;
			value : string;
			blur () : void;
			focus () : void;
			setShowCancel (showCancel: boolean, animated?: Dictionary<Object>) : void;
			getAutocapitalization () : number;
			setAutocapitalization (autocapitalization: number) : void;
			getAutocorrect () : boolean;
			setAutocorrect (autocorrect: boolean) : void;
			getBarColor () : string;
			setBarColor (barColor: string) : void;
			getCancelButtonTitle () : string;
			setCancelButtonTitle (cancelButtonTitle: string) : void;
			getHintText () : string;
			setHintText (hintText: string) : void;
			getHinttextid () : string;
			setHinttextid (hinttextid: string) : void;
			getKeyboardType () : number;
			setKeyboardType (keyboardType: number) : void;
			getKeyboardAppearance () : number;
			setKeyboardAppearance (keyboardAppearance: number) : void;
			getPrompt () : string;
			setPrompt (prompt: string) : void;
			getPromptid () : string;
			setPromptid (promptid: string) : void;
			getShowBookmark () : boolean;
			setShowBookmark (showBookmark: boolean) : void;
			getShowCancel () : boolean;
			setShowCancel (showCancel: boolean) : void;
			getValue () : string;
			setValue (value: string) : void;
		}
		export interface Slider extends Titanium.UI.View {
			disabledLeftTrackImage : string;
			disabledRightTrackImage : string;
			disabledThumbImage : string;
			enabled : boolean;
			highlightedLeftTrackImage : string;
			highlightedRightTrackImage : string;
			highlightedThumbImage : string;
			leftTrackImage : string;
			leftTrackLeftCap : number;
			leftTrackTopCap : number;
			max : number;
			maxRange : number;
			min : number;
			minRange : number;
			rightTrackImage : string;
			rightTrackLeftCap : number;
			rightTrackTopCap : number;
			selectedLeftTrackImage : string;
			selectedRightTrackImage : string;
			selectedThumbImage : string;
			thumbImage : any;
			value : string;
			setValue (value: number, options?: Dictionary<Object>) : void;
			getDisabledLeftTrackImage () : string;
			setDisabledLeftTrackImage (disabledLeftTrackImage: string) : void;
			getDisabledRightTrackImage () : string;
			setDisabledRightTrackImage (disabledRightTrackImage: string) : void;
			getDisabledThumbImage () : string;
			setDisabledThumbImage (disabledThumbImage: string) : void;
			getEnabled () : boolean;
			setEnabled (enabled: boolean) : void;
			getHighlightedLeftTrackImage () : string;
			setHighlightedLeftTrackImage (highlightedLeftTrackImage: string) : void;
			getHighlightedRightTrackImage () : string;
			setHighlightedRightTrackImage (highlightedRightTrackImage: string) : void;
			getHighlightedThumbImage () : string;
			setHighlightedThumbImage (highlightedThumbImage: string) : void;
			getLeftTrackImage () : string;
			setLeftTrackImage (leftTrackImage: string) : void;
			getLeftTrackLeftCap () : number;
			setLeftTrackLeftCap (leftTrackLeftCap: number) : void;
			getLeftTrackTopCap () : number;
			setLeftTrackTopCap (leftTrackTopCap: number) : void;
			getMax () : number;
			setMax (max: number) : void;
			getMaxRange () : number;
			setMaxRange (maxRange: number) : void;
			getMin () : number;
			setMin (min: number) : void;
			getMinRange () : number;
			setMinRange (minRange: number) : void;
			getRightTrackImage () : string;
			setRightTrackImage (rightTrackImage: string) : void;
			getRightTrackLeftCap () : number;
			setRightTrackLeftCap (rightTrackLeftCap: number) : void;
			getRightTrackTopCap () : number;
			setRightTrackTopCap (rightTrackTopCap: number) : void;
			getSelectedLeftTrackImage () : string;
			setSelectedLeftTrackImage (selectedLeftTrackImage: string) : void;
			getSelectedRightTrackImage () : string;
			setSelectedRightTrackImage (selectedRightTrackImage: string) : void;
			getSelectedThumbImage () : string;
			setSelectedThumbImage (selectedThumbImage: string) : void;
			getThumbImage () : any;
			setThumbImage (thumbImage: string) : void;
			setThumbImage (thumbImage: Titanium.Blob) : void;
			getValue () : string;
		}
		export interface Switch extends Titanium.UI.View {
			tintColor : string;
			animated : boolean;
			color : string;
			enabled : boolean;
			font : Font;
			style : number;
			textAlign : any;
			title : string;
			titleOff : string;
			titleOn : string;
			onTintColor : string;
			thumbTintColor : string;
			value : boolean;
			verticalAlign : any;
			getAnimated () : boolean;
			setAnimated (animated: boolean) : void;
			getColor () : string;
			setColor (color: string) : void;
			getEnabled () : boolean;
			setEnabled (enabled: boolean) : void;
			getFont () : Font;
			setFont (font: Font) : void;
			getStyle () : number;
			setStyle (style: number) : void;
			getTextAlign () : any;
			setTextAlign (textAlign: string) : void;
			setTextAlign (textAlign: number) : void;
			getTitle () : string;
			setTitle (title: string) : void;
			getTitleOff () : string;
			setTitleOff (titleOff: string) : void;
			getTitleOn () : string;
			setTitleOn (titleOn: string) : void;
			getOnTintColor () : string;
			setOnTintColor (onTintColor: string) : void;
			getThumbTintColor () : string;
			setThumbTintColor (thumbTintColor: string) : void;
			getValue () : boolean;
			setValue (value: boolean) : void;
			getVerticalAlign () : any;
			setVerticalAlign (verticalAlign: number) : void;
			setVerticalAlign (verticalAlign: string) : void;
		}
		export interface Tab extends Titanium.UI.View {
			active : boolean;
			activeIcon : string;
			badge : string;
			icon : string;
			iconInsets : TabIconInsets;
			iconIsMask : any;
			activeIconIsMask : any;
			title : string;
			titleid : string;
			titleColor : string;
			activeTitleColor : string;
			window : Titanium.UI.Window;
			open (window: Titanium.UI.Window, options: any) : void;
			close (window: Titanium.UI.Window, options?: any) : void;
			setWindow (window: Titanium.UI.Window) : void;
			getActive () : boolean;
			setActive (active: boolean) : void;
			getActiveIcon () : string;
			setActiveIcon (activeIcon: string) : void;
			getBadge () : string;
			setBadge (badge: string) : void;
			getIcon () : string;
			setIcon (icon: string) : void;
			getIconInsets () : TabIconInsets;
			setIconInsets (iconInsets: TabIconInsets) : void;
			getIconIsMask () : boolean;
			setIconIsMask (iconIsMask: boolean) : void;
			getActiveIconIsMask () : boolean;
			setActiveIconIsMask (activeIconIsMask: boolean) : void;
			getTitle () : string;
			setTitle (title: string) : void;
			getTitleid () : string;
			setTitleid (titleid: string) : void;
			getTitleColor () : string;
			setTitleColor (titleColor: string) : void;
			getActiveTitleColor () : string;
			setActiveTitleColor (activeTitleColor: string) : void;
			getWindow () : Titanium.UI.Window;
		}
		export interface TabGroup extends Titanium.UI.View {
			activeTab : Titanium.UI.Tab;
			activity : Titanium.Android.Activity;
			allowUserCustomization : boolean;
			barColor : string;
			translucent : boolean;
			titleAttributes : titleAttributesParams;
			navTintColor : any;
			editButtonTitle : string;
			exitOnClose : boolean;
			navBarHidden : boolean;
			swipeable : boolean;
			smoothScrollOnTabClick : boolean;
			tabs : Array<Titanium.UI.Tab>;
			windowSoftInputMode : number;
			tabsBackgroundColor : string;
			tabsTintColor : any;
			title : string;
			tabsBackgroundImage : string;
			shadowImage : string;
			activeTabIconTint : string;
			tabsBackgroundDisabledColor : string;
			tabsBackgroundDisabledImage : string;
			tabsBackgroundFocusedColor : string;
			tabsBackgroundFocusedImage : string;
			tabsBackgroundSelectedColor : string;
			tabsBackgroundSelectedImage : string;
			activeTabBackgroundColor : string;
			activeTabBackgroundImage : string;
			activeTabBackgroundDisabledColor : string;
			activeTabBackgroundDisabledImage : string;
			activeTabBackgroundFocusedColor : string;
			activeTabBackgroundFocusedImage : string;
			activeTabBackgroundSelectedColor : string;
			activeTabBackgroundSelectedImage : string;
			tabDividerColor : string;
			tabDividerWidth : any;
			tabHeight : any;
			tabsAtBottom : boolean;
			addTab (tab: Titanium.UI.Tab) : void;
			close () : void;
			disableTabNavigation (disable: boolean) : void;
			getActiveTab () : Titanium.UI.Tab;
			open () : void;
			removeTab (tab: Titanium.UI.Tab) : void;
			setActiveTab (indexOrObject: number) : void;
			setActiveTab (indexOrObject: Titanium.UI.Tab) : void;
			getTabs () : Array<Titanium.UI.Tab>;
			getActiveTab () : Titanium.UI.Tab;
			setActiveTab (activeTab: Titanium.UI.Tab) : void;
			getActivity () : Titanium.Android.Activity;
			getAllowUserCustomization () : boolean;
			setAllowUserCustomization (allowUserCustomization: boolean) : void;
			getBarColor () : string;
			setBarColor (barColor: string) : void;
			getTranslucent () : boolean;
			setTranslucent (translucent: boolean) : void;
			getTitleAttributes () : titleAttributesParams;
			setTitleAttributes (titleAttributes: titleAttributesParams) : void;
			getNavTintColor () : string;
			setNavTintColor (navTintColor: string) : void;
			getEditButtonTitle () : string;
			setEditButtonTitle (editButtonTitle: string) : void;
			getExitOnClose () : boolean;
			setExitOnClose (exitOnClose: boolean) : void;
			getNavBarHidden () : boolean;
			setNavBarHidden (navBarHidden: boolean) : void;
			getSwipeable () : boolean;
			setSwipeable (swipeable: boolean) : void;
			getSmoothScrollOnTabClick () : boolean;
			setSmoothScrollOnTabClick (smoothScrollOnTabClick: boolean) : void;
			getTabs () : Array<Titanium.UI.Tab>;
			setTabs (tabs: Array<Titanium.UI.Tab>) : void;
			getWindowSoftInputMode () : number;
			setWindowSoftInputMode (windowSoftInputMode: number) : void;
			getTabsBackgroundColor () : string;
			setTabsBackgroundColor (tabsBackgroundColor: string) : void;
			getTabsTintColor () : string;
			setTabsTintColor (tabsTintColor: string) : void;
			getTitle () : string;
			setTitle (title: string) : void;
			getTabsBackgroundImage () : string;
			setTabsBackgroundImage (tabsBackgroundImage: string) : void;
			getShadowImage () : string;
			setShadowImage (shadowImage: string) : void;
			getActiveTabIconTint () : string;
			setActiveTabIconTint (activeTabIconTint: string) : void;
			getTabsBackgroundDisabledColor () : string;
			setTabsBackgroundDisabledColor (tabsBackgroundDisabledColor: string) : void;
			getTabsBackgroundDisabledImage () : string;
			setTabsBackgroundDisabledImage (tabsBackgroundDisabledImage: string) : void;
			getTabsBackgroundFocusedColor () : string;
			setTabsBackgroundFocusedColor (tabsBackgroundFocusedColor: string) : void;
			getTabsBackgroundFocusedImage () : string;
			setTabsBackgroundFocusedImage (tabsBackgroundFocusedImage: string) : void;
			getTabsBackgroundSelectedColor () : string;
			setTabsBackgroundSelectedColor (tabsBackgroundSelectedColor: string) : void;
			getTabsBackgroundSelectedImage () : string;
			setTabsBackgroundSelectedImage (tabsBackgroundSelectedImage: string) : void;
			getActiveTabBackgroundColor () : string;
			setActiveTabBackgroundColor (activeTabBackgroundColor: string) : void;
			getActiveTabBackgroundImage () : string;
			setActiveTabBackgroundImage (activeTabBackgroundImage: string) : void;
			getActiveTabBackgroundDisabledColor () : string;
			setActiveTabBackgroundDisabledColor (activeTabBackgroundDisabledColor: string) : void;
			getActiveTabBackgroundDisabledImage () : string;
			setActiveTabBackgroundDisabledImage (activeTabBackgroundDisabledImage: string) : void;
			getActiveTabBackgroundFocusedColor () : string;
			setActiveTabBackgroundFocusedColor (activeTabBackgroundFocusedColor: string) : void;
			getActiveTabBackgroundFocusedImage () : string;
			setActiveTabBackgroundFocusedImage (activeTabBackgroundFocusedImage: string) : void;
			getActiveTabBackgroundSelectedColor () : string;
			setActiveTabBackgroundSelectedColor (activeTabBackgroundSelectedColor: string) : void;
			getActiveTabBackgroundSelectedImage () : string;
			setActiveTabBackgroundSelectedImage (activeTabBackgroundSelectedImage: string) : void;
			getTabDividerColor () : string;
			setTabDividerColor (tabDividerColor: string) : void;
			getTabDividerWidth () : any;
			setTabDividerWidth (tabDividerWidth: number) : void;
			setTabDividerWidth (tabDividerWidth: string) : void;
			getTabHeight () : any;
			setTabHeight (tabHeight: number) : void;
			setTabHeight (tabHeight: string) : void;
			getTabsAtBottom () : boolean;
			setTabsAtBottom (tabsAtBottom: boolean) : void;
		}
		export interface TabbedBar extends Titanium.UI.View {
			index : number;
			labels : any;
			style : number;
			getIndex () : number;
			setIndex (index: number) : void;
			getLabels () : any;
			setLabels (labels: Array<String>) : void;
			setLabels (labels: Array<BarItemType>) : void;
			getStyle () : number;
			setStyle (style: number) : void;
		}
		export interface TableView extends Titanium.UI.View {
			allowsSelection : boolean;
			allowsSelectionDuringEditing : boolean;
			data : any;
			editable : boolean;
			editing : boolean;
			filterAttribute : string;
			filterAnchored : boolean;
			filterCaseInsensitive : boolean;
			footerDividersEnabled : boolean;
			footerTitle : string;
			maxClassname : number;
			headerPullView : Titanium.UI.View;
			refreshControl : Titanium.UI.RefreshControl;
			hideSearchOnSelection : boolean;
			footerView : Titanium.UI.View;
			headerDividersEnabled : boolean;
			headerTitle : string;
			headerView : Titanium.UI.View;
			index : Array<TableViewIndexEntry>;
			maxRowHeight : number;
			minRowHeight : number;
			moveable : boolean;
			moving : boolean;
			overScrollMode : number;
			rowHeight : number;
			scrollable : boolean;
			scrollIndicatorStyle : number;
			scrollsToTop : boolean;
			search : any;
			searchAsChild : boolean;
			searchHidden : boolean;
			sectionCount : number;
			sections : Array<Titanium.UI.TableViewSection>;
			separatorColor : string;
			separatorInsets : Dictionary<Object>;
			tableSeparatorInsets : Dictionary<Object>;
			rowSeparatorInsets : Dictionary<Object>;
			separatorStyle : number;
			showVerticalScrollIndicator : boolean;
			style : number;
			appendRow (row: Titanium.UI.TableViewRow, animation?: TableViewAnimationProperties) : void;
			appendRow (row: Dictionary<Titanium.UI.TableViewRow>, animation?: TableViewAnimationProperties) : void;
			appendRow (row: Array<Titanium.UI.TableViewRow>, animation?: TableViewAnimationProperties) : void;
			appendRow (row: Array<Dictionary<Titanium.UI.TableViewRow>>, animation?: TableViewAnimationProperties) : void;
			appendSection (section: Titanium.UI.TableViewSection, animation?: TableViewAnimationProperties) : void;
			appendSection (section: Dictionary<Titanium.UI.TableViewSection>, animation?: TableViewAnimationProperties) : void;
			appendSection (section: Array<Titanium.UI.TableViewSection>, animation?: TableViewAnimationProperties) : void;
			appendSection (section: Array<Dictionary<Titanium.UI.TableViewSection>>, animation?: TableViewAnimationProperties) : void;
			deleteRow (row: number, animation?: TableViewAnimationProperties) : void;
			deleteRow (row: Titanium.UI.TableViewRow, animation?: TableViewAnimationProperties) : void;
			deleteSection (section: number, animation?: TableViewAnimationProperties) : void;
			deselectRow (row: number) : void;
			insertRowAfter (index: number, row: Titanium.UI.TableViewRow, animation?: TableViewAnimationProperties) : void;
			insertRowAfter (index: number, row: Dictionary<Titanium.UI.TableViewRow>, animation?: TableViewAnimationProperties) : void;
			insertSectionAfter (index: number, section: Titanium.UI.TableViewSection, animation?: TableViewAnimationProperties) : void;
			insertSectionAfter (index: number, section: Dictionary<Titanium.UI.TableViewSection>, animation?: TableViewAnimationProperties) : void;
			insertRowBefore (index: number, row: Titanium.UI.TableViewRow, animation?: TableViewAnimationProperties) : void;
			insertRowBefore (index: number, row: Dictionary<Titanium.UI.TableViewRow>, animation?: TableViewAnimationProperties) : void;
			insertSectionBefore (index: number, section: Titanium.UI.TableViewSection, animation?: TableViewAnimationProperties) : void;
			insertSectionBefore (index: number, section: Dictionary<Titanium.UI.TableViewSection>, animation?: TableViewAnimationProperties) : void;
			scrollToIndex (index: number, animation?: TableViewAnimationProperties) : void;
			scrollToTop (top: number, animation?: TableViewAnimationProperties) : void;
			setContentInsets (edgeInsets: TableViewEdgeInsets, animated?: TableViewContentInsetOption) : void;
			setContentOffset (contentOffset: Dictionary<Object>) : void;
			selectRow (row: number) : void;
			setData (data: Array<Titanium.UI.TableViewRow>, animation: TableViewAnimationProperties) : void;
			setData (data: Array<Dictionary<Titanium.UI.TableViewRow>>, animation: TableViewAnimationProperties) : void;
			setData (data: Array<Titanium.UI.TableViewSection>, animation: TableViewAnimationProperties) : void;
			setHeaderPullView (view: Titanium.UI.View) : void;
			updateRow (index: number, row: Titanium.UI.TableViewRow, animation: TableViewAnimationProperties) : void;
			updateSection (index: number, section: Titanium.UI.TableViewSection, animation: TableViewAnimationProperties) : void;
			getAllowsSelection () : boolean;
			setAllowsSelection (allowsSelection: boolean) : void;
			getAllowsSelectionDuringEditing () : boolean;
			setAllowsSelectionDuringEditing (allowsSelectionDuringEditing: boolean) : void;
			getData () : any;
			setData (data: Dictionary<Object>) : void;
			setData (data: Array<Titanium.UI.TableViewRow>) : void;
			setData (data: Array<Titanium.UI.TableViewSection>) : void;
			getEditable () : boolean;
			setEditable (editable: boolean) : void;
			getEditing () : boolean;
			setEditing (editing: boolean) : void;
			getFilterAttribute () : string;
			setFilterAttribute (filterAttribute: string) : void;
			getFilterAnchored () : boolean;
			setFilterAnchored (filterAnchored: boolean) : void;
			getFilterCaseInsensitive () : boolean;
			setFilterCaseInsensitive (filterCaseInsensitive: boolean) : void;
			getFooterDividersEnabled () : boolean;
			setFooterDividersEnabled (footerDividersEnabled: boolean) : void;
			getFooterTitle () : string;
			setFooterTitle (footerTitle: string) : void;
			getMaxClassname () : number;
			setMaxClassname (maxClassname: number) : void;
			getHeaderPullView () : Titanium.UI.View;
			setHeaderPullView (headerPullView: Titanium.UI.View) : void;
			getRefreshControl () : Titanium.UI.RefreshControl;
			setRefreshControl (refreshControl: Titanium.UI.RefreshControl) : void;
			getHideSearchOnSelection () : boolean;
			setHideSearchOnSelection (hideSearchOnSelection: boolean) : void;
			getFooterView () : Titanium.UI.View;
			setFooterView (footerView: Titanium.UI.View) : void;
			getHeaderDividersEnabled () : boolean;
			setHeaderDividersEnabled (headerDividersEnabled: boolean) : void;
			getHeaderTitle () : string;
			setHeaderTitle (headerTitle: string) : void;
			getHeaderView () : Titanium.UI.View;
			setHeaderView (headerView: Titanium.UI.View) : void;
			getIndex () : Array<TableViewIndexEntry>;
			setIndex (index: Array<TableViewIndexEntry>) : void;
			getMaxRowHeight () : number;
			setMaxRowHeight (maxRowHeight: number) : void;
			getMinRowHeight () : number;
			setMinRowHeight (minRowHeight: number) : void;
			getMoveable () : boolean;
			setMoveable (moveable: boolean) : void;
			getMoving () : boolean;
			setMoving (moving: boolean) : void;
			getOverScrollMode () : number;
			setOverScrollMode (overScrollMode: number) : void;
			getRowHeight () : number;
			setRowHeight (rowHeight: number) : void;
			getScrollable () : boolean;
			setScrollable (scrollable: boolean) : void;
			getScrollIndicatorStyle () : number;
			setScrollIndicatorStyle (scrollIndicatorStyle: number) : void;
			getScrollsToTop () : boolean;
			setScrollsToTop (scrollsToTop: boolean) : void;
			getSearch () : any;
			setSearch (search: Titanium.UI.SearchBar) : void;
			setSearch (search: Titanium.UI.Android.SearchView) : void;
			getSearchAsChild () : boolean;
			setSearchAsChild (searchAsChild: boolean) : void;
			getSearchHidden () : boolean;
			setSearchHidden (searchHidden: boolean) : void;
			getSectionCount () : number;
			getSections () : Array<Titanium.UI.TableViewSection>;
			setSections (sections: Array<Titanium.UI.TableViewSection>) : void;
			getSeparatorColor () : string;
			setSeparatorColor (separatorColor: string) : void;
			getSeparatorInsets () : Dictionary<Object>;
			setSeparatorInsets (separatorInsets: Dictionary<Object>) : void;
			getTableSeparatorInsets () : Dictionary<Object>;
			setTableSeparatorInsets (tableSeparatorInsets: Dictionary<Object>) : void;
			getRowSeparatorInsets () : Dictionary<Object>;
			setRowSeparatorInsets (rowSeparatorInsets: Dictionary<Object>) : void;
			getSeparatorStyle () : number;
			setSeparatorStyle (separatorStyle: number) : void;
			getShowVerticalScrollIndicator () : boolean;
			setShowVerticalScrollIndicator (showVerticalScrollIndicator: boolean) : void;
			getStyle () : number;
			setStyle (style: number) : void;
		}
		export interface TableViewRow extends Titanium.UI.View {
			className : string;
			color : string;
			deleteButtonTitle : string;
			editable : boolean;
			font : Font;
			footer : string;
			hasCheck : boolean;
			hasChild : boolean;
			hasDetail : boolean;
			header : string;
			indentionLevel : number;
			leftImage : string;
			moveable : boolean;
			rightImage : string;
			selectedBackgroundColor : string;
			selectedBackgroundImage : string;
			selectedColor : string;
			selectionStyle : number;
			title : string;
			getClassName () : string;
			setClassName (className: string) : void;
			getColor () : string;
			setColor (color: string) : void;
			getDeleteButtonTitle () : string;
			setDeleteButtonTitle (deleteButtonTitle: string) : void;
			getEditable () : boolean;
			setEditable (editable: boolean) : void;
			getFont () : Font;
			setFont (font: Font) : void;
			getFooter () : string;
			setFooter (footer: string) : void;
			getHasCheck () : boolean;
			setHasCheck (hasCheck: boolean) : void;
			getHasChild () : boolean;
			setHasChild (hasChild: boolean) : void;
			getHasDetail () : boolean;
			setHasDetail (hasDetail: boolean) : void;
			getHeader () : string;
			setHeader (header: string) : void;
			getIndentionLevel () : number;
			setIndentionLevel (indentionLevel: number) : void;
			getLeftImage () : string;
			setLeftImage (leftImage: string) : void;
			getMoveable () : boolean;
			setMoveable (moveable: boolean) : void;
			getRightImage () : string;
			setRightImage (rightImage: string) : void;
			getSelectedBackgroundColor () : string;
			setSelectedBackgroundColor (selectedBackgroundColor: string) : void;
			getSelectedBackgroundImage () : string;
			setSelectedBackgroundImage (selectedBackgroundImage: string) : void;
			getSelectedColor () : string;
			setSelectedColor (selectedColor: string) : void;
			getSelectionStyle () : number;
			setSelectionStyle (selectionStyle: number) : void;
			getTitle () : string;
			setTitle (title: string) : void;
		}
		export interface TableViewSection extends Titanium.Proxy {
			footerTitle : string;
			footerView : Titanium.UI.View;
			headerTitle : string;
			headerView : Titanium.UI.View;
			rowCount : number;
			rows : Array<Titanium.UI.TableViewRow>;
			add (row: Titanium.UI.TableViewRow) : void;
			remove (row: Titanium.UI.TableViewRow) : void;
			rowAtIndex (index: number) : Titanium.UI.TableViewRow;
			getFooterTitle () : string;
			setFooterTitle (footerTitle: string) : void;
			getFooterView () : Titanium.UI.View;
			setFooterView (footerView: Titanium.UI.View) : void;
			getHeaderTitle () : string;
			setHeaderTitle (headerTitle: string) : void;
			getHeaderView () : Titanium.UI.View;
			setHeaderView (headerView: Titanium.UI.View) : void;
			getRowCount () : number;
			getRows () : Array<Titanium.UI.TableViewRow>;
		}
		export interface TextArea extends Titanium.UI.View {
			appearance : number;
			keyboardAppearance : number;
			attributedString : Titanium.UI.AttributedString;
			autocapitalization : number;
			autocorrect : boolean;
			autoLink : number;
			clearOnEdit : boolean;
			color : string;
			editable : boolean;
			ellipsize : boolean;
			enableReturnKey : boolean;
			font : Font;
			hintText : string;
			hintTextColor : string;
			handleLinks : boolean;
			keyboardToolbar : any;
			keyboardToolbarColor : string;
			keyboardToolbarHeight : number;
			keyboardType : number;
			maxLength : number;
			returnKeyType : number;
			scrollsToTop : boolean;
			showUndoRedoActions : boolean;
			suppressReturn : boolean;
			textAlign : any;
			value : string;
			scrollable : boolean;
			selection : textAreaSelectedParams;
			verticalAlign : any;
			blur () : void;
			focus () : void;
			hasText () : boolean;
			setSelection (start: number, end: number) : void;
			getAppearance () : number;
			setAppearance (appearance: number) : void;
			getKeyboardAppearance () : number;
			setKeyboardAppearance (keyboardAppearance: number) : void;
			getAttributedString () : Titanium.UI.AttributedString;
			setAttributedString (attributedString: Titanium.UI.AttributedString) : void;
			getAutocapitalization () : number;
			setAutocapitalization (autocapitalization: number) : void;
			getAutocorrect () : boolean;
			setAutocorrect (autocorrect: boolean) : void;
			getAutoLink () : number;
			setAutoLink (autoLink: number) : void;
			getClearOnEdit () : boolean;
			setClearOnEdit (clearOnEdit: boolean) : void;
			getColor () : string;
			setColor (color: string) : void;
			getEditable () : boolean;
			setEditable (editable: boolean) : void;
			getEllipsize () : boolean;
			setEllipsize (ellipsize: boolean) : void;
			getEnableReturnKey () : boolean;
			setEnableReturnKey (enableReturnKey: boolean) : void;
			getFont () : Font;
			setFont (font: Font) : void;
			getHintText () : string;
			setHintText (hintText: string) : void;
			getHintTextColor () : string;
			setHintTextColor (hintTextColor: string) : void;
			getHandleLinks () : boolean;
			setHandleLinks (handleLinks: boolean) : void;
			getKeyboardToolbar () : any;
			setKeyboardToolbar (keyboardToolbar: Array<Titanium.UI.View>) : void;
			setKeyboardToolbar (keyboardToolbar: Titanium.UI.iOS.Toolbar) : void;
			getKeyboardToolbarColor () : string;
			setKeyboardToolbarColor (keyboardToolbarColor: string) : void;
			getKeyboardToolbarHeight () : number;
			setKeyboardToolbarHeight (keyboardToolbarHeight: number) : void;
			getKeyboardType () : number;
			setKeyboardType (keyboardType: number) : void;
			getMaxLength () : number;
			setMaxLength (maxLength: number) : void;
			getReturnKeyType () : number;
			setReturnKeyType (returnKeyType: number) : void;
			getScrollsToTop () : boolean;
			setScrollsToTop (scrollsToTop: boolean) : void;
			getShowUndoRedoActions () : boolean;
			setShowUndoRedoActions (showUndoRedoActions: boolean) : void;
			getSuppressReturn () : boolean;
			setSuppressReturn (suppressReturn: boolean) : void;
			getTextAlign () : any;
			setTextAlign (textAlign: string) : void;
			setTextAlign (textAlign: number) : void;
			getValue () : string;
			setValue (value: string) : void;
			getScrollable () : boolean;
			setScrollable (scrollable: boolean) : void;
			getSelection () : textAreaSelectedParams;
			getVerticalAlign () : any;
			setVerticalAlign (verticalAlign: number) : void;
			setVerticalAlign (verticalAlign: string) : void;
		}
		export interface TextField extends Titanium.UI.View {
			appearance : number;
			keyboardAppearance : number;
			attributedString : Titanium.UI.AttributedString;
			attributedHintText : Titanium.UI.AttributedString;
			autocapitalization : number;
			autocorrect : boolean;
			autoLink : number;
			borderStyle : number;
			clearButtonMode : number;
			clearOnEdit : boolean;
			color : string;
			editable : boolean;
			ellipsize : boolean;
			enableReturnKey : boolean;
			font : Font;
			hintText : string;
			hintTextColor : string;
			inputType : Array<Number>;
			keyboardToolbar : any;
			keyboardToolbarColor : string;
			keyboardToolbarHeight : number;
			keyboardType : number;
			leftButton : any;
			leftButtonMode : number;
			leftButtonPadding : number;
			minimumFontSize : number;
			paddingLeft : number;
			paddingRight : number;
			passwordMask : boolean;
			returnKeyType : number;
			rightButton : any;
			rightButtonMode : number;
			rightButtonPadding : number;
			suppressReturn : boolean;
			selection : textFieldSelectedParams;
			showUndoRedoActions : boolean;
			textAlign : any;
			value : string;
			verticalAlign : any;
			maxLength : number;
			blur () : void;
			focus () : void;
			hasText () : boolean;
			setSelection (start: number, end: number) : void;
			getAppearance () : number;
			setAppearance (appearance: number) : void;
			getKeyboardAppearance () : number;
			setKeyboardAppearance (keyboardAppearance: number) : void;
			getAttributedString () : Titanium.UI.AttributedString;
			setAttributedString (attributedString: Titanium.UI.AttributedString) : void;
			getAttributedHintText () : Titanium.UI.AttributedString;
			setAttributedHintText (attributedHintText: Titanium.UI.AttributedString) : void;
			getAutocapitalization () : number;
			setAutocapitalization (autocapitalization: number) : void;
			getAutocorrect () : boolean;
			setAutocorrect (autocorrect: boolean) : void;
			getAutoLink () : number;
			setAutoLink (autoLink: number) : void;
			getBorderStyle () : number;
			setBorderStyle (borderStyle: number) : void;
			getClearButtonMode () : number;
			setClearButtonMode (clearButtonMode: number) : void;
			getClearOnEdit () : boolean;
			setClearOnEdit (clearOnEdit: boolean) : void;
			getColor () : string;
			setColor (color: string) : void;
			getEditable () : boolean;
			setEditable (editable: boolean) : void;
			getEllipsize () : boolean;
			setEllipsize (ellipsize: boolean) : void;
			getEnableReturnKey () : boolean;
			setEnableReturnKey (enableReturnKey: boolean) : void;
			getFont () : Font;
			setFont (font: Font) : void;
			getHintText () : string;
			setHintText (hintText: string) : void;
			getHintTextColor () : string;
			setHintTextColor (hintTextColor: string) : void;
			getInputType () : Array<Number>;
			setInputType (inputType: Array<Number>) : void;
			getKeyboardToolbar () : any;
			setKeyboardToolbar (keyboardToolbar: Array<Titanium.UI.View>) : void;
			setKeyboardToolbar (keyboardToolbar: Titanium.UI.iOS.Toolbar) : void;
			getKeyboardToolbarColor () : string;
			setKeyboardToolbarColor (keyboardToolbarColor: string) : void;
			getKeyboardToolbarHeight () : number;
			setKeyboardToolbarHeight (keyboardToolbarHeight: number) : void;
			getKeyboardType () : number;
			setKeyboardType (keyboardType: number) : void;
			getLeftButton () : any;
			setLeftButton (leftButton: any) : void;
			getLeftButtonMode () : number;
			setLeftButtonMode (leftButtonMode: number) : void;
			getLeftButtonPadding () : number;
			setLeftButtonPadding (leftButtonPadding: number) : void;
			getMinimumFontSize () : number;
			setMinimumFontSize (minimumFontSize: number) : void;
			getPaddingLeft () : number;
			setPaddingLeft (paddingLeft: number) : void;
			getPaddingRight () : number;
			setPaddingRight (paddingRight: number) : void;
			getPasswordMask () : boolean;
			setPasswordMask (passwordMask: boolean) : void;
			getReturnKeyType () : number;
			setReturnKeyType (returnKeyType: number) : void;
			getRightButton () : any;
			setRightButton (rightButton: any) : void;
			getRightButtonMode () : number;
			setRightButtonMode (rightButtonMode: number) : void;
			getRightButtonPadding () : number;
			setRightButtonPadding (rightButtonPadding: number) : void;
			getSuppressReturn () : boolean;
			setSuppressReturn (suppressReturn: boolean) : void;
			getSelection () : textFieldSelectedParams;
			getShowUndoRedoActions () : boolean;
			setShowUndoRedoActions (showUndoRedoActions: boolean) : void;
			getTextAlign () : any;
			setTextAlign (textAlign: string) : void;
			setTextAlign (textAlign: number) : void;
			getValue () : string;
			setValue (value: string) : void;
			getVerticalAlign () : any;
			setVerticalAlign (verticalAlign: number) : void;
			setVerticalAlign (verticalAlign: string) : void;
			getMaxLength () : number;
			setMaxLength (maxLength: number) : void;
		}
		export interface Toolbar extends Titanium.UI.View {
			barColor : string;
			items : Array<Titanium.UI.View>;
			borderTop : boolean;
			borderBottom : boolean;
			translucent : boolean;
			getBarColor () : string;
			setBarColor (barColor: string) : void;
			getItems () : Array<Titanium.UI.View>;
			setItems (items: Array<Titanium.UI.View>) : void;
			getBorderTop () : boolean;
			setBorderTop (borderTop: boolean) : void;
			getBorderBottom () : boolean;
			setBorderBottom (borderBottom: boolean) : void;
			getTranslucent () : boolean;
			setTranslucent (translucent: boolean) : void;
		}
		export interface WebView extends Titanium.UI.View {
			allowsLinkPreview : boolean;
			data : any;
			disableBounce : boolean;
			enableJavascriptInterface : boolean;
			handlePlatformUrl : boolean;
			hideLoadIndicator : boolean;
			html : string;
			ignoreSslError : boolean;
			loading : boolean;
			onCreateWindow : (...args : any[]) => any;
			overScrollMode : number;
			cacheMode : number;
			pluginState : number;
			scrollsToTop : boolean;
			showScrollbars : boolean;
			enableZoomControls : boolean;
			scalesPageToFit : boolean;
			url : string;
			userAgent : string;
			willHandleTouches : boolean;
			lightTouchEnabled : boolean;
			setHtml (html: any, options?: Dictionary<Object>) : void;
			canGoBack () : boolean;
			canGoForward () : boolean;
			evalJS (code: string) : string;
			goBack () : void;
			goForward () : void;
			pause () : void;
			reload () : void;
			repaint () : void;
			release () : void;
			resume () : void;
			setBasicAuthentication (username: string, password: string) : void;
			stopLoading (hardStop: boolean) : void;
			getAllowsLinkPreview () : boolean;
			setAllowsLinkPreview (allowsLinkPreview: boolean) : void;
			getData () : any;
			setData (data: Titanium.Blob) : void;
			setData (data: Titanium.Filesystem.File) : void;
			getDisableBounce () : boolean;
			setDisableBounce (disableBounce: boolean) : void;
			getEnableJavascriptInterface () : boolean;
			setEnableJavascriptInterface (enableJavascriptInterface: boolean) : void;
			getHandlePlatformUrl () : boolean;
			setHandlePlatformUrl (handlePlatformUrl: boolean) : void;
			getHideLoadIndicator () : boolean;
			setHideLoadIndicator (hideLoadIndicator: boolean) : void;
			getHtml () : string;
			setHtml (html: string) : void;
			getIgnoreSslError () : boolean;
			setIgnoreSslError (ignoreSslError: boolean) : void;
			getLoading () : boolean;
			setLoading (loading: boolean) : void;
			getOnCreateWindow () : (...args : any[]) => any;
			setOnCreateWindow (onCreateWindow: (...args : any[]) => any) : void;
			getOverScrollMode () : number;
			setOverScrollMode (overScrollMode: number) : void;
			getCacheMode () : number;
			setCacheMode (cacheMode: number) : void;
			getPluginState () : number;
			setPluginState (pluginState: number) : void;
			getScrollsToTop () : boolean;
			setScrollsToTop (scrollsToTop: boolean) : void;
			getShowScrollbars () : boolean;
			setShowScrollbars (showScrollbars: boolean) : void;
			getEnableZoomControls () : boolean;
			setEnableZoomControls (enableZoomControls: boolean) : void;
			getScalesPageToFit () : boolean;
			setScalesPageToFit (scalesPageToFit: boolean) : void;
			getUrl () : string;
			setUrl (url: string) : void;
			getUserAgent () : string;
			setUserAgent (userAgent: string) : void;
			getWillHandleTouches () : boolean;
			setWillHandleTouches (willHandleTouches: boolean) : void;
			getLightTouchEnabled () : boolean;
			setLightTouchEnabled (lightTouchEnabled: boolean) : void;
		}
		export interface Window extends Titanium.UI.View {
			activity : Titanium.Android.Activity;
			backButtonTitle : string;
			backButtonTitleImage : any;
			barColor : string;
			barImage : string;
			exitOnClose : boolean;
			extendEdges : Array<Number>;
			flagSecure : boolean;
			includeOpaqueBars : boolean;
			autoAdjustScrollViewInsets : boolean;
			fullscreen : boolean;
			hideShadow : boolean;
			leftNavButton : Titanium.UI.View;
			leftNavButtons : Array<Titanium.UI.View>;
			modal : boolean;
			navBarHidden : boolean;
			navTintColor : any;
			onBack : (...args : any[]) => any;
			orientationModes : Array<Number>;
			orientation : number;
			rightNavButton : Titanium.UI.View;
			rightNavButtons : Array<Titanium.UI.View>;
			shadowImage : string;
			splitActionBar : boolean;
			statusBarStyle : any;
			swipeToClose : boolean;
			tabBarHidden : boolean;
			theme : string;
			title : string;
			titleAttributes : titleAttributesParams;
			titleControl : Titanium.UI.View;
			titleImage : string;
			titlePrompt : string;
			titleid : string;
			titlepromptid : string;
			toolbar : Array<Object>;
			transitionAnimation : Titanium.Proxy;
			translucent : boolean;
			url : string;
			windowFlags : number;
			windowSoftInputMode : number;
			windowPixelFormat : number;
			addSharedElement (view: Titanium.UI.View, transitionName: string) : void;
			close (params?: Dictionary<Titanium.UI.Animation>) : void;
			close (params?: closeWindowParams) : void;
			hideNavBar (options?: Dictionary<Object>) : void;
			hideTabBar () : void;
			open (params?: openWindowParams) : void;
			removeAllSharedElements () : void;
			setToolbar (items: Array<Object>, params?: windowToolbarParam) : void;
			showNavBar (options?: Dictionary<Object>) : void;
			showToolbar (options?: Dictionary<Object>) : void;
			hideToolbar (options?: Dictionary<Object>) : void;
			getActivity () : Titanium.Android.Activity;
			getBackButtonTitle () : string;
			setBackButtonTitle (backButtonTitle: string) : void;
			getBackButtonTitleImage () : any;
			setBackButtonTitleImage (backButtonTitleImage: string) : void;
			setBackButtonTitleImage (backButtonTitleImage: Titanium.Blob) : void;
			getBarColor () : string;
			setBarColor (barColor: string) : void;
			getBarImage () : string;
			setBarImage (barImage: string) : void;
			getExitOnClose () : boolean;
			setExitOnClose (exitOnClose: boolean) : void;
			getExtendEdges () : Array<Number>;
			setExtendEdges (extendEdges: Array<Number>) : void;
			getFlagSecure () : boolean;
			setFlagSecure (flagSecure: boolean) : void;
			getIncludeOpaqueBars () : boolean;
			setIncludeOpaqueBars (includeOpaqueBars: boolean) : void;
			getAutoAdjustScrollViewInsets () : boolean;
			setAutoAdjustScrollViewInsets (autoAdjustScrollViewInsets: boolean) : void;
			getFullscreen () : boolean;
			setFullscreen (fullscreen: boolean) : void;
			getHideShadow () : boolean;
			setHideShadow (hideShadow: boolean) : void;
			getLeftNavButton () : Titanium.UI.View;
			setLeftNavButton (leftNavButton: Titanium.UI.View) : void;
			getLeftNavButtons () : Array<Titanium.UI.View>;
			setLeftNavButtons (leftNavButtons: Array<Titanium.UI.View>) : void;
			getModal () : boolean;
			setModal (modal: boolean) : void;
			getNavBarHidden () : boolean;
			setNavBarHidden (navBarHidden: boolean) : void;
			getNavTintColor () : string;
			setNavTintColor (navTintColor: string) : void;
			getOnBack () : (...args : any[]) => any;
			setOnBack (onBack: (...args : any[]) => any) : void;
			getOrientationModes () : Array<Number>;
			setOrientationModes (orientationModes: Array<Number>) : void;
			getOrientation () : number;
			getRightNavButton () : Titanium.UI.View;
			setRightNavButton (rightNavButton: Titanium.UI.View) : void;
			getRightNavButtons () : Array<Titanium.UI.View>;
			setRightNavButtons (rightNavButtons: Array<Titanium.UI.View>) : void;
			getShadowImage () : string;
			setShadowImage (shadowImage: string) : void;
			getSplitActionBar () : boolean;
			setSplitActionBar (splitActionBar: boolean) : void;
			getStatusBarStyle () : number;
			setStatusBarStyle (statusBarStyle: number) : void;
			getSwipeToClose () : boolean;
			setSwipeToClose (swipeToClose: boolean) : void;
			getTabBarHidden () : boolean;
			setTabBarHidden (tabBarHidden: boolean) : void;
			getTheme () : string;
			setTheme (theme: string) : void;
			getTitle () : string;
			setTitle (title: string) : void;
			getTitleAttributes () : titleAttributesParams;
			setTitleAttributes (titleAttributes: titleAttributesParams) : void;
			getTitleControl () : Titanium.UI.View;
			setTitleControl (titleControl: Titanium.UI.View) : void;
			getTitleImage () : string;
			setTitleImage (titleImage: string) : void;
			getTitlePrompt () : string;
			setTitlePrompt (titlePrompt: string) : void;
			getTitleid () : string;
			setTitleid (titleid: string) : void;
			getTitlepromptid () : string;
			setTitlepromptid (titlepromptid: string) : void;
			getToolbar () : Array<Object>;
			setToolbar (toolbar: Array<Object>) : void;
			getTransitionAnimation () : Titanium.Proxy;
			setTransitionAnimation (transitionAnimation: Titanium.Proxy) : void;
			getTranslucent () : boolean;
			setTranslucent (translucent: boolean) : void;
			getUrl () : string;
			setUrl (url: string) : void;
			getWindowFlags () : number;
			setWindowFlags (windowFlags: number) : void;
			getWindowSoftInputMode () : number;
			setWindowSoftInputMode (windowSoftInputMode: number) : void;
			getWindowPixelFormat () : number;
			setWindowPixelFormat (windowPixelFormat: number) : void;
		}
		export module iOS {
			export var bubbleParent : boolean;
			export var apiName : string;
			export var ANIMATION_CURVE_EASE_IN : number;
			export var ANIMATION_CURVE_EASE_IN_OUT : number;
			export var ANIMATION_CURVE_EASE_OUT : number;
			export var ANIMATION_CURVE_LINEAR : number;
			export var ATTRIBUTE_FONT : number;
			export var ATTRIBUTE_FOREGROUND_COLOR : number;
			export var ATTRIBUTE_BACKGROUND_COLOR : number;
			export var ATTRIBUTE_LIGATURE : number;
			export var ATTRIBUTE_LETTERPRESS_STYLE : number;
			export var ATTRIBUTE_KERN : number;
			export var ATTRIBUTE_STRIKETHROUGH_STYLE : number;
			export var ATTRIBUTE_UNDERLINES_STYLE : number;
			export var ATTRIBUTE_STROKE_COLOR : number;
			export var ATTRIBUTE_STROKE_WIDTH : number;
			export var ATTRIBUTE_SHADOW : number;
			export var ATTRIBUTE_WRITING_DIRECTION : number;
			export var ATTRIBUTE_TEXT_EFFECT : number;
			export var ATTRIBUTE_LINK : number;
			export var ATTRIBUTE_BASELINE_OFFSET : number;
			export var ATTRIBUTE_UNDERLINE_COLOR : number;
			export var ATTRIBUTE_STRIKETHROUGH_COLOR : number;
			export var ATTRIBUTE_OBLIQUENESS : number;
			export var ATTRIBUTE_EXPANSION : number;
			export var ATTRIBUTE_UNDERLINE_STYLE_NONE : number;
			export var ATTRIBUTE_UNDERLINE_STYLE_SINGLE : number;
			export var ATTRIBUTE_UNDERLINE_STYLE_THICK : number;
			export var ATTRIBUTE_UNDERLINE_STYLE_DOUBLE : number;
			export var ATTRIBUTE_UNDERLINE_PATTERN_SOLID : number;
			export var ATTRIBUTE_UNDERLINE_PATTERN_DOT : number;
			export var ATTRIBUTE_UNDERLINE_PATTERN_DASH : number;
			export var ATTRIBUTE_UNDERLINE_PATTERN_DASH_DOT : number;
			export var ATTRIBUTE_UNDERLINE_PATTERN_DASH_DOT_DOT : number;
			export var ATTRIBUTE_UNDERLINE_BY_WORD : number;
			export var ATTRIBUTE_WRITING_DIRECTION_EMBEDDING : number;
			export var ATTRIBUTE_WRITING_DIRECTION_OVERRIDE : number;
			export var ATTRIBUTE_WRITING_DIRECTION_NATURAL : number;
			export var ATTRIBUTE_WRITING_DIRECTION_LEFT_TO_RIGHT : number;
			export var ATTRIBUTE_WRITING_DIRECTION_RIGHT_TO_LEFT : number;
			export var AUTODETECT_ADDRESS : number;
			export var AUTODETECT_ALL : number;
			export var AUTODETECT_CALENDAR : number;
			export var AUTODETECT_LINK : number;
			export var AUTODETECT_NONE : number;
			export var AUTODETECT_PHONE : number;
			export var BLEND_MODE_CLEAR : number;
			export var BLEND_MODE_COLOR : number;
			export var BLEND_MODE_COLOR_BURN : number;
			export var BLEND_MODE_COLOR_DODGE : number;
			export var BLEND_MODE_COPY : number;
			export var BLEND_MODE_DARKEN : number;
			export var BLEND_MODE_DESTINATION_ATOP : number;
			export var BLEND_MODE_DESTINATION_IN : number;
			export var BLEND_MODE_DESTINATION_OUT : number;
			export var BLEND_MODE_DESTINATION_OVER : number;
			export var BLEND_MODE_DIFFERENCE : number;
			export var BLEND_MODE_EXCLUSION : number;
			export var BLEND_MODE_HARD_LIGHT : number;
			export var BLEND_MODE_HUE : number;
			export var BLEND_MODE_LIGHTEN : number;
			export var BLEND_MODE_LUMINOSITY : number;
			export var BLEND_MODE_MULTIPLY : number;
			export var BLEND_MODE_NORMAL : number;
			export var BLEND_MODE_OVERLAY : number;
			export var BLEND_MODE_PLUS_DARKER : number;
			export var BLEND_MODE_PLUS_LIGHTER : number;
			export var BLEND_MODE_SATURATION : number;
			export var BLEND_MODE_SCREEN : number;
			export var BLEND_MODE_SOFT_LIGHT : number;
			export var BLEND_MODE_SOURCE_ATOP : number;
			export var BLEND_MODE_SOURCE_IN : number;
			export var BLEND_MODE_SOURCE_OUT : number;
			export var BLEND_MODE_XOR : number;
			export var BLUR_EFFECT_STYLE_EXTRA_LIGHT : number;
			export var BLUR_EFFECT_STYLE_LIGHT : number;
			export var BLUR_EFFECT_STYLE_DARK : number;
			export var AD_SIZE_PORTRAIT : string;
			export var AD_SIZE_LANDSCAPE : string;
			export var CLIP_MODE_DEFAULT : number;
			export var CLIP_MODE_DISABLED : number;
			export var CLIP_MODE_ENABLED : number;
			export var COLLISION_MODE_ALL : number;
			export var COLLISION_MODE_BOUNDARY : number;
			export var COLLISION_MODE_ITEM : number;
			export var COLOR_GROUP_TABLEVIEW_BACKGROUND : string;
			export var COLOR_SCROLLVIEW_BACKGROUND : string;
			export var COLOR_VIEW_FLIPSIDE_BACKGROUND : string;
			export var COLOR_UNDER_PAGE_BACKGROUND : string;
			export var forceTouchSupported : boolean;
			export var LIVEPHOTO_PLAYBACK_STYLE_FULL : number;
			export var LIVEPHOTO_PLAYBACK_STYLE_HINT : number;
			export var MENU_POPUP_ARROW_DIRECTION_UP : number;
			export var MENU_POPUP_ARROW_DIRECTION_DOWN : number;
			export var MENU_POPUP_ARROW_DIRECTION_LEFT : number;
			export var MENU_POPUP_ARROW_DIRECTION_RIGHT : number;
			export var MENU_POPUP_ARROW_DIRECTION_DEFAULT : number;
			export var PUSH_MODE_CONTINUOUS : number;
			export var PUSH_MODE_INSTANTANEOUS : number;
			export var PREVIEW_ACTION_STYLE_DEFAULT : number;
			export var PREVIEW_ACTION_STYLE_SELECTED : number;
			export var PREVIEW_ACTION_STYLE_DESTRUCTIVE : number;
			export var ROW_ACTION_STYLE_DEFAULT : number;
			export var ROW_ACTION_STYLE_DESTRUCTIVE : number;
			export var ROW_ACTION_STYLE_NORMAL : number;
			export var SCROLL_DECELERATION_RATE_FAST : number;
			export var SCROLL_DECELERATION_RATE_NORMAL : number;
			export var WEBVIEW_NAVIGATIONTYPE_LINK_CLICKED : number;
			export var WEBVIEW_NAVIGATIONTYPE_FORM_SUBMITTED : number;
			export var WEBVIEW_NAVIGATIONTYPE_BACK_FORWARD : number;
			export var WEBVIEW_NAVIGATIONTYPE_RELOAD : number;
			export var WEBVIEW_NAVIGATIONTYPE_FORM_RESUBMITTED : number;
			export var WEBVIEW_NAVIGATIONTYPE_OTHER : number;
			export var TABLEVIEW_INDEX_SEARCH : string;
			export var SHORTCUT_ICON_TYPE_COMPOSE : number;
			export var SHORTCUT_ICON_TYPE_PLAY : number;
			export var SHORTCUT_ICON_TYPE_PAUSE : number;
			export var SHORTCUT_ICON_TYPE_ADD : number;
			export var SHORTCUT_ICON_TYPE_LOCATION : number;
			export var SHORTCUT_ICON_TYPE_SEARCH : number;
			export var SHORTCUT_ICON_TYPE_SHARE : number;
			export var SHORTCUT_ICON_TYPE_PROHIBIT : number;
			export var SHORTCUT_ICON_TYPE_CONTACT : number;
			export var SHORTCUT_ICON_TYPE_HOME : number;
			export var SHORTCUT_ICON_TYPE_MARK_LOCATION : number;
			export var SHORTCUT_ICON_TYPE_FAVORITE : number;
			export var SHORTCUT_ICON_TYPE_LOVE : number;
			export var SHORTCUT_ICON_TYPE_CLOUD : number;
			export var SHORTCUT_ICON_TYPE_INVITATION : number;
			export var SHORTCUT_ICON_TYPE_CONFIRMATION : number;
			export var SHORTCUT_ICON_TYPE_MAIL : number;
			export var SHORTCUT_ICON_TYPE_MESSAGE : number;
			export var SHORTCUT_ICON_TYPE_DATE : number;
			export var SHORTCUT_ICON_TYPE_TIME : number;
			export var SHORTCUT_ICON_TYPE_CAPTURE_PHOTO : number;
			export var SHORTCUT_ICON_TYPE_CAPTURE_VIDEO : number;
			export var SHORTCUT_ICON_TYPE_TASK : number;
			export var SHORTCUT_ICON_TYPE_TASK_COMPLETED : number;
			export var SHORTCUT_ICON_TYPE_ALARM : number;
			export var SHORTCUT_ICON_TYPE_BOOKMARK : number;
			export var SHORTCUT_ICON_TYPE_SHUFFLE : number;
			export var SHORTCUT_ICON_TYPE_AUDIO : number;
			export var SHORTCUT_ICON_TYPE_UPDATE : number;
			export var appBadge : number;
			export var appSupportsShakeToEdit : boolean;
			export function addEventListener (name: string, callback: (...args : any[]) => any) : void;
			export function removeEventListener (name: string, callback: (...args : any[]) => any) : void;
			export function fireEvent (name: string, event: Dictionary<Object>) : void;
			export function applyProperties (props: Dictionary<Object>) : void;
			export function createTransitionAnimation (transition: transitionAnimationParam) : Titanium.Proxy;
			export function create3DMatrix (parameters?: Dictionary<Titanium.UI.iOS._3DMatrix>) : Titanium.UI.iOS._3DMatrix;
			export function createAdView (parameters?: Dictionary<Titanium.UI.iOS.AdView>) : Titanium.UI.iOS.AdView;
			export function createAnchorAttachmentBehavior (parameters?: Dictionary<Titanium.UI.iOS.AnchorAttachmentBehavior>) : Titanium.UI.iOS.AnchorAttachmentBehavior;
			export function createAnimator (parameters?: Dictionary<Titanium.UI.iOS.Animator>) : Titanium.UI.iOS.Animator;
			export function createApplicationShortcuts (parameters?: Dictionary<Titanium.UI.iOS.ApplicationShortcuts>) : Titanium.UI.iOS.ApplicationShortcuts;
			export function createAttribute (parameters?: Dictionary<Titanium.UI.iOS.Attribute>) : Titanium.UI.iOS.Attribute;
			export function createAttributedString (parameters?: Dictionary<Titanium.UI.iOS.AttributedString>) : Titanium.UI.iOS.AttributedString;
			export function createBlurView (parameters?: Dictionary<Titanium.UI.iOS.BlurView>) : Titanium.UI.iOS.BlurView;
			export function createCollisionBehavior (parameters?: Dictionary<Titanium.UI.iOS.CollisionBehavior>) : Titanium.UI.iOS.CollisionBehavior;
			export function createCoverFlowView (parameters?: Dictionary<Titanium.UI.iOS.CoverFlowView>) : Titanium.UI.iOS.CoverFlowView;
			export function createDocumentViewer (parameters?: Dictionary<Titanium.UI.iOS.DocumentViewer>) : Titanium.UI.iOS.DocumentViewer;
			export function createDynamicItemBehavior (parameters?: Dictionary<Titanium.UI.iOS.DynamicItemBehavior>) : Titanium.UI.iOS.DynamicItemBehavior;
			export function createGravityBehavior (parameters?: Dictionary<Titanium.UI.iOS.GravityBehavior>) : Titanium.UI.iOS.GravityBehavior;
			export function createLivePhotoView (parameters?: Dictionary<Titanium.UI.iOS.LivePhotoView>) : Titanium.UI.iOS.LivePhotoView;
			export function createNavigationWindow (parameters?: Dictionary<Titanium.UI.iOS.NavigationWindow>) : Titanium.UI.iOS.NavigationWindow;
			export function createPreviewAction (parameters?: Dictionary<Titanium.UI.iOS.PreviewAction>) : Titanium.UI.iOS.PreviewAction;
			export function createPreviewActionGroup (parameters?: Dictionary<Titanium.UI.iOS.PreviewActionGroup>) : Titanium.UI.iOS.PreviewActionGroup;
			export function createPreviewContext (parameters?: Dictionary<Titanium.UI.iOS.PreviewContext>) : Titanium.UI.iOS.PreviewContext;
			export function createPushBehavior (parameters?: Dictionary<Titanium.UI.iOS.PushBehavior>) : Titanium.UI.iOS.PushBehavior;
			export function createSnapBehavior (parameters?: Dictionary<Titanium.UI.iOS.SnapBehavior>) : Titanium.UI.iOS.SnapBehavior;
			export function createSplitWindow (parameters?: Dictionary<Titanium.UI.iOS.SplitWindow>) : Titanium.UI.iOS.SplitWindow;
			export function createSystemButton (parameters?: Dictionary<Titanium.UI.iOS.SystemButton>) : Titanium.UI.iOS.SystemButton;
			export function createTabbedBar (parameters?: Dictionary<Titanium.UI.iOS.TabbedBar>) : Titanium.UI.iOS.TabbedBar;
			export function createToolbar (parameters?: Dictionary<Titanium.UI.iOS.Toolbar>) : Titanium.UI.iOS.Toolbar;
			export function createViewAttachmentBehavior (parameters?: Dictionary<Titanium.UI.iOS.ViewAttachmentBehavior>) : Titanium.UI.iOS.ViewAttachmentBehavior;
			export function getBubbleParent () : boolean;
			export function setBubbleParent (bubbleParent: boolean) : void;
			export function getApiName () : string;
			export function getForceTouchSupported () : boolean;
			export function getAppBadge () : number;
			export function setAppBadge (appBadge: number) : void;
			export function getAppSupportsShakeToEdit () : boolean;
			export function setAppSupportsShakeToEdit (appSupportsShakeToEdit: boolean) : void;
			export interface _3DMatrix extends Titanium.Proxy {
				m11 : number;
				m12 : number;
				m13 : number;
				m14 : number;
				m21 : number;
				m22 : number;
				m23 : number;
				m24 : number;
				m31 : number;
				m32 : number;
				m33 : number;
				m34 : number;
				m41 : number;
				m42 : number;
				m43 : number;
				m44 : number;
				invert () : Titanium.UI._3DMatrix;
				multiply (t2: Titanium.UI._3DMatrix) : Titanium.UI._3DMatrix;
				rotate (angle: number, x: number, y: number, z: number) : Titanium.UI._3DMatrix;
				scale (sx: number, sy: number, sz: number) : Titanium.UI._3DMatrix;
				translate (tx: number, ty: number, tz: number) : Titanium.UI._3DMatrix;
				getM11 () : number;
				setM11 (m11: number) : void;
				getM12 () : number;
				setM12 (m12: number) : void;
				getM13 () : number;
				setM13 (m13: number) : void;
				getM14 () : number;
				setM14 (m14: number) : void;
				getM21 () : number;
				setM21 (m21: number) : void;
				getM22 () : number;
				setM22 (m22: number) : void;
				getM23 () : number;
				setM23 (m23: number) : void;
				getM24 () : number;
				setM24 (m24: number) : void;
				getM31 () : number;
				setM31 (m31: number) : void;
				getM32 () : number;
				setM32 (m32: number) : void;
				getM33 () : number;
				setM33 (m33: number) : void;
				getM34 () : number;
				setM34 (m34: number) : void;
				getM41 () : number;
				setM41 (m41: number) : void;
				getM42 () : number;
				setM42 (m42: number) : void;
				getM43 () : number;
				setM43 (m43: number) : void;
				getM44 () : number;
				setM44 (m44: number) : void;
			}
			export interface AdView extends Titanium.UI.View {
				adSize : string;
				cancelAction () : void;
				getAdSize () : string;
				setAdSize (adSize: string) : void;
			}
			export enum AlertDialogStyle {
				DEFAULT,
				PLAIN_TEXT_INPUT,
				SECURE_TEXT_INPUT,
				LOGIN_AND_PASSWORD_INPUT
			}
			export interface AnchorAttachmentBehavior extends Titanium.Proxy {
				anchor : Point;
				damping : number;
				distance : number;
				frequency : number;
				item : Titanium.UI.View;
				offset : Point;
				getAnchor () : Point;
				setAnchor (anchor: Point) : void;
				getDamping () : number;
				setDamping (damping: number) : void;
				getDistance () : number;
				setDistance (distance: number) : void;
				getFrequency () : number;
				setFrequency (frequency: number) : void;
				getItem () : Titanium.UI.View;
				setItem (item: Titanium.UI.View) : void;
				getOffset () : Point;
				setOffset (offset: Point) : void;
			}
			export enum AnimationStyle {
				CURL_DOWN,
				CURL_UP,
				FLIP_FROM_LEFT,
				FLIP_FROM_RIGHT,
				NONE
			}
			export interface Animator extends Titanium.Proxy {
				behaviors : Array<Titanium.Proxy>;
				referenceView : Titanium.UI.View;
				running : boolean;
				addBehavior (behavior: Titanium.Proxy) : void;
				removeAllBehaviors () : void;
				removeBehavior (behavior: Titanium.Proxy) : void;
				startAnimator () : void;
				stopAnimator () : void;
				updateItemUsingCurrentState (item: Titanium.UI.View) : void;
				getBehaviors () : Array<Titanium.Proxy>;
				setBehaviors (behaviors: Array<Titanium.Proxy>) : void;
				getReferenceView () : Titanium.UI.View;
				setReferenceView (referenceView: Titanium.UI.View) : void;
				getRunning () : boolean;
			}
			export interface ApplicationShortcuts extends Titanium.Proxy {
				listDynamicShortcuts () : Array<ShortcutParams>;
				listStaticShortcuts () : Array<ShortcutParams>;
				removeAllDynamicShortcuts () : void;
				dynamicShortcutExists (itemtype: string) : boolean;
				addDynamicShortcut (params: ShortcutParams) : void;
				removeDynamicShortcut (itemtype: string) : void;
				getDynamicShortcut (itemtype: string) : void;
			}
			export interface Attribute extends Titanium.Proxy {
				type : number;
				value : number;
				range : Array<Number>;
				getType () : number;
				setType (type: number) : void;
				getValue () : number;
				setValue (value: number) : void;
				getRange () : Array<Number>;
				setRange (range: Array<Number>) : void;
			}
			export interface AttributedString extends Titanium.Proxy {
				text : string;
				attributes : Array<Attribute>;
				addAttribute (attribute: Attribute) : void;
				getText () : string;
				setText (text: string) : void;
				getAttributes () : Array<Attribute>;
				setAttributes (attributes: Array<Attribute>) : void;
			}
			export interface BlurView extends Titanium.UI.View {
				effect : number;
				getEffect () : number;
				setEffect (effect: number) : void;
			}
			export interface CollisionBehavior extends Titanium.Proxy {
				boundaryIdentifiers : Array<BoundaryIdentifier>;
				collisionMode : number;
				items : Array<Titanium.UI.View>;
				referenceInsets : ReferenceInsets;
				treatReferenceAsBoundary : boolean;
				addBoundary (boundary: BoundaryIdentifier) : void;
				addItem (item: Titanium.UI.View) : void;
				removeAllBoundaries () : void;
				removeBoundary (boundary: BoundaryIdentifier) : void;
				removeItem (item: Titanium.UI.View) : void;
				getBoundaryIdentifiers () : Array<BoundaryIdentifier>;
				getCollisionMode () : number;
				setCollisionMode (collisionMode: number) : void;
				getItems () : Array<Titanium.UI.View>;
				getReferenceInsets () : ReferenceInsets;
				setReferenceInsets (referenceInsets: ReferenceInsets) : void;
				getTreatReferenceAsBoundary () : boolean;
				setTreatReferenceAsBoundary (treatReferenceAsBoundary: boolean) : void;
			}
			export interface CoverFlowView extends Titanium.UI.View {
				images : any;
				selected : number;
				setImage (index: number, image: string) : void;
				setImage (image: Titanium.Blob) : void;
				setImage (image: Titanium.Filesystem.File) : void;
				setImage (index: number, image: CoverFlowImageType) : void;
				getImages () : any;
				setImages (images: Array<String>) : void;
				setImages (images: Array<Titanium.Blob>) : void;
				setImages (images: Array<Titanium.Filesystem.File>) : void;
				setImages (images: Array<CoverFlowImageType>) : void;
				getSelected () : number;
				setSelected (selected: number) : void;
			}
			export interface DocumentViewer extends Titanium.UI.View {
				name : string;
				url : string;
				hide (options?: DocumentViewerOptions) : void;
				show (options?: DocumentViewerOptions) : void;
				getName () : string;
				getUrl () : string;
				setUrl (url: string) : void;
			}
			export interface DynamicItemBehavior extends Titanium.Proxy {
				allowsRotation : boolean;
				angularResistance : number;
				density : number;
				elasticity : number;
				friction : number;
				items : Array<Titanium.UI.View>;
				resistance : number;
				addAngularVelocityForItem (item: Titanium.UI.View, velocity: number) : void;
				addItem (item: Titanium.UI.View) : void;
				addLinearVelocityForItem (item: Titanium.UI.View, velocity: Point) : void;
				angularVelocityForItem (item: Titanium.UI.View) : number;
				linearVelocityForItem (item: Titanium.UI.View) : Point;
				removeItem (item: Titanium.UI.View) : void;
				getAllowsRotation () : boolean;
				setAllowsRotation (allowsRotation: boolean) : void;
				getAngularResistance () : number;
				setAngularResistance (angularResistance: number) : void;
				getDensity () : number;
				setDensity (density: number) : void;
				getElasticity () : number;
				setElasticity (elasticity: number) : void;
				getFriction () : number;
				setFriction (friction: number) : void;
				getItems () : Array<Titanium.UI.View>;
				getResistance () : number;
				setResistance (resistance: number) : void;
			}
			export interface GravityBehavior extends Titanium.Proxy {
				angle : number;
				gravityDirection : Point;
				items : Array<Titanium.UI.View>;
				magnitude : number;
				addItem (item: Titanium.UI.View) : void;
				removeItem (item: Titanium.UI.View) : void;
				getAngle () : number;
				setAngle (angle: number) : void;
				getGravityDirection () : Point;
				setGravityDirection (gravityDirection: Point) : void;
				getItems () : Array<Titanium.UI.View>;
				getMagnitude () : number;
				setMagnitude (magnitude: number) : void;
			}
			export enum ListViewCellSelectionStyle {
				BLUE,
				GRAY,
				NONE
			}
			export enum ListViewScrollPosition {
				BOTTOM,
				MIDDLE,
				NONE,
				TOP
			}
			export enum ListViewStyle {
				GROUPED,
				PLAIN
			}
			export interface LivePhoto  {

			}
			export interface LivePhotoView extends Titanium.UI.View {
				livePhoto : any;
				startPlaybackWithStyle (playbackStyle: number) : void;
				stopPlayback () : void;
				getLivePhoto () : Titanium.UI.iOS.LivePhoto;
				setLivePhoto (livePhoto: Titanium.UI.iOS.LivePhoto) : void;
			}
			export interface MenuPopup  {
				items : any;
				show (params: MenuPopupShowParams) : void;
				hide (params?: MenuPopupHideParams) : void;
				isVisible () : void;
			}
			export interface NavigationWindow extends Titanium.UI.Window {
				window : Titanium.UI.Window;
				closeWindow (window: Titanium.UI.Window, options: Dictionary<Object>) : void;
				openWindow (window: Titanium.UI.Window, options: Dictionary<Object>) : void;
				getWindow () : Titanium.UI.Window;
				setWindow (window: Titanium.UI.Window) : void;
			}
			export interface PreviewAction extends Titanium.Proxy {
				title : string;
				style : number;
				getTitle () : string;
				setTitle (title: string) : void;
				getStyle () : number;
				setStyle (style: number) : void;
			}
			export interface PreviewActionGroup extends Titanium.Proxy {
				title : string;
				style : number;
				actions : Array<Titanium.UI.iOS.PreviewAction>;
				getTitle () : string;
				setTitle (title: string) : void;
				getStyle () : number;
				setStyle (style: number) : void;
				getActions () : Array<Titanium.UI.iOS.PreviewAction>;
				setActions (actions: Array<Titanium.UI.iOS.PreviewAction>) : void;
			}
			export interface PreviewContext extends Titanium.Proxy {
				actions : Array<Titanium.UI.iOS.PreviewAction>;
				contentHeight : number;
				preview : Titanium.UI.View;
				getActions () : Array<Titanium.UI.iOS.PreviewAction>;
				setActions (actions: Array<Titanium.UI.iOS.PreviewAction>) : void;
				getContentHeight () : number;
				setContentHeight (contentHeight: number) : void;
				getPreview () : Titanium.UI.View;
				setPreview (preview: Titanium.UI.View) : void;
			}
			export enum ProgressBarStyle {
				BAR,
				DEFAULT,
				PLAIN
			}
			export interface PushBehavior extends Titanium.Proxy {
				active : boolean;
				angle : number;
				items : Array<Titanium.UI.View>;
				magnitude : number;
				pushDirection : Point;
				pushMode : number;
				addItem (item: Titanium.UI.View) : void;
				removeItem (item: Titanium.UI.View) : void;
				getActive () : boolean;
				setActive (active: boolean) : void;
				getAngle () : number;
				setAngle (angle: number) : void;
				getItems () : Array<Titanium.UI.View>;
				getMagnitude () : number;
				setMagnitude (magnitude: number) : void;
				getPushDirection () : Point;
				setPushDirection (pushDirection: Point) : void;
				getPushMode () : number;
				setPushMode (pushMode: number) : void;
			}
			export enum RowAnimationStyle {
				BOTTOM,
				FADE,
				LEFT,
				NONE,
				RIGHT,
				TOP
			}
			export enum ScrollIndicatorStyle {
				BLACK,
				DEFAULT,
				WHITE
			}
			export interface SnapBehavior extends Titanium.Proxy {
				damping : number;
				item : Titanium.UI.View;
				snapPoint : Point;
				getDamping () : number;
				setDamping (damping: number) : void;
				getItem () : Titanium.UI.View;
				setItem (item: Titanium.UI.View) : void;
				getSnapPoint () : Point;
				setSnapPoint (snapPoint: Point) : void;
			}
			export interface SplitWindow extends Titanium.UI.Window {
				detailView : Titanium.UI.View;
				masterView : Titanium.UI.View;
				showMasterInPortrait : boolean;
				masterIsOverlayed : boolean;
				portraitSplit : number;
				landscapeSplit : number;
				setShowMasterInPortrait (showMasterInPortrait: boolean, animated?: animationOption) : void;
				setMasterIsOverlayed (masterIsOverlayed: boolean, animated?: animationOption) : void;
				getDetailView () : Titanium.UI.View;
				setDetailView (detailView: Titanium.UI.View) : void;
				getMasterView () : Titanium.UI.View;
				setMasterView (masterView: Titanium.UI.View) : void;
				getShowMasterInPortrait () : boolean;
				setShowMasterInPortrait (showMasterInPortrait: boolean) : void;
				getMasterIsOverlayed () : boolean;
				setMasterIsOverlayed (masterIsOverlayed: boolean) : void;
				getPortraitSplit () : number;
				setPortraitSplit (portraitSplit: number) : void;
				getLandscapeSplit () : number;
				setLandscapeSplit (landscapeSplit: number) : void;
			}
			export enum StatusBar {
				ANIMATION_STYLE_NONE,
				ANIMATION_STYLE_SLIDE,
				ANIMATION_STYLE_FADE,
				DEFAULT,
				GRAY,
				GREY,
				LIGHT_CONTENT
			}
			export enum SystemButton {
				ACTION,
				ACTIVITY,
				ADD,
				BOOKMARKS,
				CAMERA,
				CANCEL,
				COMPOSE,
				CONTACT_ADD,
				DISCLOSURE,
				DONE,
				EDIT,
				FAST_FORWARD,
				FIXED_SPACE,
				FLEXIBLE_SPACE,
				INFO_DARK,
				INFO_LIGHT,
				ORGANIZE,
				PAUSE,
				PLAY,
				REFRESH,
				REPLY,
				REWIND,
				SAVE,
				SPINNER,
				STOP,
				TRASH
			}
			export enum SystemButtonStyle {
				BORDERED,
				DONE,
				PLAIN
			}
			export interface TabbedBar extends Titanium.UI.View {
				index : number;
				labels : any;
				style : number;
				getIndex () : number;
				setIndex (index: number) : void;
				getLabels () : any;
				setLabels (labels: Array<String>) : void;
				setLabels (labels: Array<BarItemType>) : void;
				getStyle () : number;
				setStyle (style: number) : void;
			}
			export enum TableViewCellSelectionStyle {
				BLUE,
				GRAY,
				NONE
			}
			export enum TableViewScrollPosition {
				BOTTOM,
				MIDDLE,
				NONE,
				TOP
			}
			export enum TableViewStyle {
				GROUPED,
				PLAIN
			}
			export interface Toolbar extends Titanium.UI.View {
				barColor : string;
				items : Array<Titanium.UI.View>;
				borderTop : boolean;
				borderBottom : boolean;
				extendBackground : boolean;
				translucent : boolean;
				getBarColor () : string;
				setBarColor (barColor: string) : void;
				getItems () : Array<Titanium.UI.View>;
				setItems (items: Array<Titanium.UI.View>) : void;
				getBorderTop () : boolean;
				setBorderTop (borderTop: boolean) : void;
				getBorderBottom () : boolean;
				setBorderBottom (borderBottom: boolean) : void;
				getExtendBackground () : boolean;
				setExtendBackground (extendBackground: boolean) : void;
				getTranslucent () : boolean;
				setTranslucent (translucent: boolean) : void;
			}
			export interface ViewAttachmentBehavior extends Titanium.Proxy {
				anchorItem : Titanium.UI.View;
				anchorOffset : Point;
				damping : number;
				distance : number;
				frequency : number;
				item : Titanium.UI.View;
				itemOffset : Point;
				getAnchorItem () : Titanium.UI.View;
				setAnchorItem (anchorItem: Titanium.UI.View) : void;
				getAnchorOffset () : Point;
				setAnchorOffset (anchorOffset: Point) : void;
				getDamping () : number;
				setDamping (damping: number) : void;
				getDistance () : number;
				setDistance (distance: number) : void;
				getFrequency () : number;
				setFrequency (frequency: number) : void;
				getItem () : Titanium.UI.View;
				setItem (item: Titanium.UI.View) : void;
				getItemOffset () : Point;
				setItemOffset (itemOffset: Point) : void;
			}
		}
		export module iPad {
			export var bubbleParent : boolean;
			export var apiName : string;
			export var POPOVER_ARROW_DIRECTION_ANY : number;
			export var POPOVER_ARROW_DIRECTION_DOWN : number;
			export var POPOVER_ARROW_DIRECTION_LEFT : number;
			export var POPOVER_ARROW_DIRECTION_RIGHT : number;
			export var POPOVER_ARROW_DIRECTION_UNKNOWN : number;
			export var POPOVER_ARROW_DIRECTION_UP : number;
			export function addEventListener (name: string, callback: (...args : any[]) => any) : void;
			export function removeEventListener (name: string, callback: (...args : any[]) => any) : void;
			export function fireEvent (name: string, event: Dictionary<Object>) : void;
			export function applyProperties (props: Dictionary<Object>) : void;
			export function createDocumentViewer (parameters?: Dictionary<Titanium.UI.iPad.DocumentViewer>) : Titanium.UI.iPad.DocumentViewer;
			export function createPopover (parameters?: Dictionary<Titanium.UI.iPad.Popover>) : Titanium.UI.iPad.Popover;
			export function createSplitWindow (parameters?: Dictionary<Titanium.UI.iPad.SplitWindow>) : Titanium.UI.iPad.SplitWindow;
			export function getBubbleParent () : boolean;
			export function setBubbleParent (bubbleParent: boolean) : void;
			export function getApiName () : string;
			export interface DocumentViewer extends Titanium.UI.View {
				show (animated: boolean, view: any) : void;
				setUrl (url: string) : void;
			}
			export interface Popover extends Titanium.UI.View {
				arrowDirection : number;
				contentView : Titanium.UI.View;
				leftNavButton : any;
				passthroughViews : Array<Titanium.UI.View>;
				rightNavButton : any;
				title : string;
				hide (options: PopoverParams) : void;
				show (params: PopoverParams) : void;
				getArrowDirection () : number;
				setArrowDirection (arrowDirection: number) : void;
				getContentView () : Titanium.UI.View;
				setContentView (contentView: Titanium.UI.View) : void;
				getLeftNavButton () : any;
				setLeftNavButton (leftNavButton: any) : void;
				getPassthroughViews () : Array<Titanium.UI.View>;
				setPassthroughViews (passthroughViews: Array<Titanium.UI.View>) : void;
				getRightNavButton () : any;
				setRightNavButton (rightNavButton: any) : void;
				getTitle () : string;
				setTitle (title: string) : void;
			}
			export interface SplitWindow extends Titanium.UI.Window {
				detailView : Titanium.UI.View;
				masterView : Titanium.UI.View;
				showMasterInPortrait : boolean;
				getDetailView () : Titanium.UI.View;
				setDetailView (detailView: Titanium.UI.View) : void;
				getMasterView () : Titanium.UI.View;
				setMasterView (masterView: Titanium.UI.View) : void;
				getShowMasterInPortrait () : boolean;
				setShowMasterInPortrait (showMasterInPortrait: boolean) : void;
			}
		}
		export module iPhone {
			export var bubbleParent : boolean;
			export var apiName : string;
			export var MODAL_PRESENTATION_CURRENT_CONTEXT : number;
			export var MODAL_PRESENTATION_FORMSHEET : number;
			export var MODAL_PRESENTATION_FULLSCREEN : number;
			export var MODAL_PRESENTATION_PAGESHEET : number;
			export var MODAL_TRANSITION_STYLE_COVER_VERTICAL : number;
			export var MODAL_TRANSITION_STYLE_CROSS_DISSOLVE : number;
			export var MODAL_TRANSITION_STYLE_FLIP_HORIZONTAL : number;
			export var MODAL_TRANSITION_STYLE_PARTIAL_CURL : number;
			export var appBadge : number;
			export var appSupportsShakeToEdit : boolean;
			export var statusBarHidden : boolean;
			export var statusBarStyle : number;
			export function addEventListener (name: string, callback: (...args : any[]) => any) : void;
			export function removeEventListener (name: string, callback: (...args : any[]) => any) : void;
			export function fireEvent (name: string, event: Dictionary<Object>) : void;
			export function applyProperties (props: Dictionary<Object>) : void;
			export function hideStatusBar (params?: hideStatusBarParams) : void;
			export function showStatusBar (params?: showStatusBarParams) : void;
			export function createNavigationGroup (parameters?: Dictionary<Titanium.UI.iPhone.NavigationGroup>) : Titanium.UI.iPhone.NavigationGroup;
			export function getBubbleParent () : boolean;
			export function setBubbleParent (bubbleParent: boolean) : void;
			export function getApiName () : string;
			export function getAppBadge () : number;
			export function setAppBadge (appBadge: number) : void;
			export function getAppSupportsShakeToEdit () : boolean;
			export function setAppSupportsShakeToEdit (appSupportsShakeToEdit: boolean) : void;
			export function getStatusBarHidden () : boolean;
			export function getStatusBarStyle () : number;
			export enum ActivityIndicatorStyle {
				BIG,
				DARK,
				PLAIN
			}
			export enum AlertDialogStyle {
				DEFAULT,
				PLAIN_TEXT_INPUT,
				SECURE_TEXT_INPUT,
				LOGIN_AND_PASSWORD_INPUT
			}
			export enum AnimationStyle {
				CURL_DOWN,
				CURL_UP,
				FLIP_FROM_LEFT,
				FLIP_FROM_RIGHT,
				NONE
			}
			export enum ListViewCellSelectionStyle {
				BLUE,
				GRAY,
				NONE
			}
			export enum ListViewScrollPosition {
				BOTTOM,
				MIDDLE,
				NONE,
				TOP
			}
			export enum ListViewSeparatorStyle {
				NONE,
				SINGLE_LINE
			}
			export enum ListViewStyle {
				GROUPED,
				PLAIN
			}
			export interface NavigationGroup extends Titanium.UI.View {
				window : Titanium.UI.Window;
				close (window: Titanium.UI.Window, options: Dictionary<Object>) : void;
				open (window: Titanium.UI.Window, options: Dictionary<Object>) : void;
				getWindow () : Titanium.UI.Window;
				setWindow (window: Titanium.UI.Window) : void;
			}
			export enum ProgressBarStyle {
				BAR,
				DEFAULT,
				PLAIN
			}
			export enum RowAnimationStyle {
				BOTTOM,
				FADE,
				LEFT,
				NONE,
				RIGHT,
				TOP
			}
			export enum ScrollIndicatorStyle {
				BLACK,
				DEFAULT,
				WHITE
			}
			export enum StatusBar {
				ANIMATION_STYLE_NONE,
				ANIMATION_STYLE_SLIDE,
				ANIMATION_STYLE_FADE,
				DEFAULT,
				GRAY,
				GREY,
				LIGHT_CONTENT,
				OPAQUE_BLACK,
				TRANSLUCENT_BLACK
			}
			export enum SystemButton {
				ACTION,
				ACTIVITY,
				ADD,
				BOOKMARKS,
				CAMERA,
				CANCEL,
				COMPOSE,
				CONTACT_ADD,
				DISCLOSURE,
				DONE,
				EDIT,
				FAST_FORWARD,
				FIXED_SPACE,
				FLEXIBLE_SPACE,
				INFO_DARK,
				INFO_LIGHT,
				ORGANIZE,
				PAUSE,
				PLAY,
				REFRESH,
				REPLY,
				REWIND,
				SAVE,
				SPINNER,
				STOP,
				TRASH
			}
			export enum SystemButtonStyle {
				BAR,
				BORDERED,
				DONE,
				PLAIN
			}
			export enum SystemIcon {
				BOOKMARKS,
				CONTACTS,
				DOWNLOADS,
				FAVORITES,
				FEATURED,
				HISTORY,
				MORE,
				MOST_RECENT,
				MOST_VIEWED,
				RECENTS,
				SEARCH,
				TOP_RATED
			}
			export enum TableViewCellSelectionStyle {
				BLUE,
				GRAY,
				NONE
			}
			export enum TableViewScrollPosition {
				BOTTOM,
				MIDDLE,
				NONE,
				TOP
			}
			export enum TableViewSeparatorStyle {
				NONE,
				SINGLE_LINE
			}
			export enum TableViewStyle {
				GROUPED,
				PLAIN
			}
		}
	}
	export interface API  {
		debug (message: Array<String>) : void;
		debug (message: string) : void;
		error (message: Array<String>) : void;
		error (message: string) : void;
		info (message: Array<String>) : void;
		info (message: string) : void;
		log (level: string, message: Array<String>) : void;
		log (level: string, message: string) : void;
		timestamp (message: Array<String>) : void;
		timestamp (message: string) : void;
		trace (message: Array<String>) : void;
		trace (message: string) : void;
		warn (message: Array<String>) : void;
		warn (message: string) : void;
	}
	export enum Accelerometer {

	}
	export interface Analytics  {
		lastEvent : string;
		addEvent (type: string, name: string, data?: any) : void;
		featureEvent (name: string, data?: any) : number;
		filterEvents (events: Array<String>) : void;
		navEvent (from: string, to: string, name?: string, data?: any) : void;
		settingsEvent (name: string, data?: any) : void;
		timedEvent (name: string, start: Date, stop: Date, duration: number, data?: any) : void;
		userEvent (name: string, data?: any) : void;
		getLastEvent () : string;
	}
	export module Android {
		export var bubbleParent : boolean;
		export var apiName : string;
		export var lifecycleContainer : any;
		export var ACTION_AIRPLANE_MODE_CHANGED : string;
		export var ACTION_ALL_APPS : string;
		export var ACTION_ANSWER : string;
		export var ACTION_ATTACH_DATA : string;
		export var ACTION_BATTERY_CHANGED : string;
		export var ACTION_BATTERY_LOW : string;
		export var ACTION_BATTERY_OKAY : string;
		export var ACTION_BOOT_COMPLETED : string;
		export var ACTION_BUG_REPORT : string;
		export var ACTION_CALL : string;
		export var ACTION_CALL_BUTTON : string;
		export var ACTION_CAMERA_BUTTON : string;
		export var ACTION_CHOOSER : string;
		export var ACTION_CLOSE_SYSTEM_DIALOGS : string;
		export var ACTION_CONFIGURATION_CHANGED : string;
		export var ACTION_CREATE_SHORTCUT : string;
		export var ACTION_DATE_CHANGED : string;
		export var ACTION_DEFAULT : string;
		export var ACTION_DELETE : string;
		export var ACTION_DEVICE_STORAGE_LOW : string;
		export var ACTION_DIAL : string;
		export var ACTION_EDIT : string;
		export var ACTION_GET_CONTENT : string;
		export var ACTION_GTALK_SERVICE_CONNECTED : string;
		export var ACTION_GTALK_SERVICE_DISCONNECTED : string;
		export var ACTION_HEADSET_PLUG : string;
		export var ACTION_INPUT_METHOD_CHANGED : string;
		export var ACTION_INSERT : string;
		export var ACTION_INSERT_OR_EDIT : string;
		export var ACTION_MAIN : string;
		export var ACTION_MANAGE_PACKAGE_STORAGE : string;
		export var ACTION_MEDIA_BAD_REMOVAL : string;
		export var ACTION_MEDIA_BUTTON : string;
		export var ACTION_MEDIA_CHECKING : string;
		export var ACTION_MEDIA_EJECT : string;
		export var ACTION_MEDIA_MOUNTED : string;
		export var ACTION_MEDIA_NOFS : string;
		export var ACTION_MEDIA_REMOVED : string;
		export var ACTION_MEDIA_SCANNER_FINISHED : string;
		export var ACTION_MEDIA_SCANNER_SCAN_FILE : string;
		export var ACTION_MEDIA_SCANNER_STARTED : string;
		export var ACTION_MEDIA_SHARED : string;
		export var ACTION_MEDIA_UNMOUNTABLE : string;
		export var ACTION_MEDIA_UNMOUNTED : string;
		export var ACTION_NEW_OUTGOING_CALL : string;
		export var ACTION_PACKAGE_ADDED : string;
		export var ACTION_PACKAGE_CHANGED : string;
		export var ACTION_PACKAGE_DATA_CLEARED : string;
		export var ACTION_PACKAGE_INSTALL : string;
		export var ACTION_PACKAGE_REMOVED : string;
		export var ACTION_PACKAGE_REPLACED : string;
		export var ACTION_PACKAGE_RESTARTED : string;
		export var ACTION_PICK : string;
		export var ACTION_PICK_ACTIVITY : string;
		export var ACTION_POWER_CONNECTED : string;
		export var ACTION_POWER_DISCONNECTED : string;
		export var ACTION_POWER_USAGE_SUMMARY : string;
		export var ACTION_PROVIDER_CHANGED : string;
		export var ACTION_REBOOT : string;
		export var ACTION_RUN : string;
		export var ACTION_SCREEN_OFF : string;
		export var ACTION_SCREEN_ON : string;
		export var ACTION_SEARCH : string;
		export var ACTION_SEARCH_LONG_PRESS : string;
		export var ACTION_SEND : string;
		export var ACTION_SENDTO : string;
		export var ACTION_SEND_MULTIPLE : string;
		export var ACTION_SET_WALLPAPER : string;
		export var ACTION_SHUTDOWN : string;
		export var ACTION_SYNC : string;
		export var ACTION_SYSTEM_TUTORIAL : string;
		export var ACTION_TIME_CHANGED : string;
		export var ACTION_TIME_TICK : string;
		export var ACTION_UID_REMOVED : string;
		export var ACTION_UMS_CONNECTED : string;
		export var ACTION_UMS_DISCONNECTED : string;
		export var ACTION_USER_PRESENT : string;
		export var ACTION_VIEW : string;
		export var ACTION_VOICE_COMMAND : string;
		export var ACTION_WALLPAPER_CHANGED : string;
		export var ACTION_WEB_SEARCH : string;
		export var CATEGORY_ALTERNATIVE : string;
		export var CATEGORY_BROWSABLE : string;
		export var CATEGORY_DEFAULT : string;
		export var CATEGORY_DEVELOPMENT_PREFERENCE : string;
		export var CATEGORY_EMBED : string;
		export var CATEGORY_FRAMEWORK_INSTRUMENTATION_TEST : string;
		export var CATEGORY_HOME : string;
		export var CATEGORY_INFO : string;
		export var CATEGORY_LAUNCHER : string;
		export var CATEGORY_MONKEY : string;
		export var CATEGORY_OPENABLE : string;
		export var CATEGORY_PREFERENCE : string;
		export var CATEGORY_SAMPLE_CODE : string;
		export var CATEGORY_SELECTED_ALTERNATIVE : string;
		export var CATEGORY_TAB : string;
		export var CATEGORY_TEST : string;
		export var CATEGORY_UNIT_TEST : string;
		export var EXTRA_ALARM_COUNT : string;
		export var EXTRA_BCC : string;
		export var EXTRA_CC : string;
		export var EXTRA_DATA_REMOVED : string;
		export var EXTRA_DONT_KILL_APP : string;
		export var EXTRA_EMAIL : string;
		export var EXTRA_INTENT : string;
		export var EXTRA_KEY_EVENT : string;
		export var EXTRA_PHONE_NUMBER : string;
		export var EXTRA_REPLACING : string;
		export var EXTRA_SHORTCUT_ICON : string;
		export var EXTRA_SHORTCUT_ICON_RESOURCE : string;
		export var EXTRA_SHORTCUT_INTENT : string;
		export var EXTRA_SHORTCUT_NAME : string;
		export var EXTRA_STREAM : string;
		export var EXTRA_SUBJECT : string;
		export var EXTRA_TEMPLATE : string;
		export var EXTRA_TEXT : string;
		export var EXTRA_TITLE : string;
		export var EXTRA_UID : string;
		export var FILL_IN_ACTION : number;
		export var FILL_IN_CATEGORIES : number;
		export var FILL_IN_COMPONENT : number;
		export var FILL_IN_DATA : number;
		export var FILL_IN_PACKAGE : number;
		export var FLAG_ACTIVITY_BROUGHT_TO_FRONT : number;
		export var FLAG_ACTIVITY_CLEAR_TOP : number;
		export var FLAG_ACTIVITY_CLEAR_WHEN_TASK_RESET : number;
		export var FLAG_ACTIVITY_EXCLUDE_FROM_RECENTS : number;
		export var FLAG_ACTIVITY_FORWARD_RESULT : number;
		export var FLAG_ACTIVITY_LAUNCHED_FROM_HISTORY : number;
		export var FLAG_ACTIVITY_MULTIPLE_TASK : number;
		export var FLAG_ACTIVITY_NEW_TASK : number;
		export var FLAG_ACTIVITY_NO_ANIMATION : number;
		export var FLAG_ACTIVITY_NO_HISTORY : number;
		export var FLAG_ACTIVITY_NO_USER_ACTION : number;
		export var FLAG_ACTIVITY_PREVIOUS_IS_TOP : number;
		export var FLAG_ACTIVITY_REORDER_TO_FRONT : number;
		export var FLAG_ACTIVITY_RESET_TASK_IF_NEEDED : number;
		export var FLAG_ACTIVITY_SINGLE_TOP : number;
		export var FLAG_DEBUG_LOG_RESOLUTION : number;
		export var FLAG_FROM_BACKGROUND : number;
		export var FLAG_GRANT_READ_URI_PERMISSION : number;
		export var FLAG_GRANT_WRITE_URI_PERMISSION : number;
		export var FLAG_RECEIVER_REGISTERED_ONLY : number;
		export var FLAG_CANCEL_CURRENT : number;
		export var FLAG_NO_CREATE : number;
		export var FLAG_ONE_SHOT : number;
		export var FLAG_UPDATE_CURRENT : number;
		export var CATEGORY_ALARM : string;
		export var CATEGORY_CALL : string;
		export var CATEGORY_EMAIL : string;
		export var CATEGORY_ERROR : string;
		export var CATEGORY_EVENT : string;
		export var CATEGORY_MESSAGE : string;
		export var CATEGORY_PROGRESS : string;
		export var CATEGORY_PROMO : string;
		export var CATEGORY_RECOMMENDATION : string;
		export var CATEGORY_SERVICE : string;
		export var CATEGORY_SOCIAL : string;
		export var CATEGORY_STATUS : string;
		export var CATEGORY_TRANSPORT : string;
		export var DEFAULT_ALL : number;
		export var DEFAULT_LIGHTS : number;
		export var DEFAULT_SOUND : number;
		export var DEFAULT_VIBRATE : number;
		export var FLAG_AUTO_CANCEL : number;
		export var FLAG_INSISTENT : number;
		export var FLAG_NO_CLEAR : number;
		export var FLAG_ONGOING_EVENT : number;
		export var FLAG_ONLY_ALERT_ONCE : number;
		export var FLAG_SHOW_LIGHTS : number;
		export var PRIORITY_MAX : number;
		export var PRIORITY_HIGH : number;
		export var PRIORITY_DEFAULT : number;
		export var PRIORITY_LOW : number;
		export var PRIORITY_MIN : number;
		export var VISIBILITY_PRIVATE : number;
		export var VISIBILITY_PUBLIC : number;
		export var VISIBILITY_SECRET : number;
		export var PENDING_INTENT_FOR_ACTIVITY : number;
		export var PENDING_INTENT_FOR_BROADCAST : number;
		export var PENDING_INTENT_FOR_SERVICE : number;
		export var PENDING_INTENT_MAX_VALUE : number;
		export var R : Titanium.Android.R;
		export var RESULT_CANCELED : number;
		export var RESULT_FIRST_USER : number;
		export var RESULT_OK : number;
		export var SCREEN_ORIENTATION_BEHIND : number;
		export var SCREEN_ORIENTATION_LANDSCAPE : number;
		export var SCREEN_ORIENTATION_NOSENSOR : number;
		export var SCREEN_ORIENTATION_PORTRAIT : number;
		export var SCREEN_ORIENTATION_SENSOR : number;
		export var SCREEN_ORIENTATION_UNSPECIFIED : number;
		export var SCREEN_ORIENTATION_USER : number;
		export var SHOW_AS_ACTION_ALWAYS : number;
		export var SHOW_AS_ACTION_COLLAPSE_ACTION_VIEW : number;
		export var SHOW_AS_ACTION_IF_ROOM : number;
		export var SHOW_AS_ACTION_NEVER : number;
		export var SHOW_AS_ACTION_WITH_TEXT : number;
		export var NAVIGATION_MODE_STANDARD : number;
		export var NAVIGATION_MODE_TABS : number;
		export var START_NOT_STICKY : number;
		export var START_REDELIVER_INTENT : number;
		export var STREAM_ALARM : number;
		export var STREAM_DEFAULT : number;
		export var STREAM_MUSIC : number;
		export var STREAM_NOTIFICATION : number;
		export var STREAM_RING : number;
		export var STREAM_SYSTEM : number;
		export var STREAM_VOICE_CALL : number;
		export var URI_INTENT_SCHEME : number;
		export var currentActivity : Titanium.Android.Activity;
		export var currentService : Titanium.Android.Service;
		export function addEventListener (name: string, callback: (...args : any[]) => any) : void;
		export function removeEventListener (name: string, callback: (...args : any[]) => any) : void;
		export function fireEvent (name: string, event: Dictionary<Object>) : void;
		export function applyProperties (props: Dictionary<Object>) : void;
		export function createIntentChooser (intent: Titanium.Android.Intent, title: string) : Titanium.Android.Intent;
		export function createPendingIntent (parameters?: Dictionary<Titanium.Android.PendingIntent>) : Titanium.Android.PendingIntent;
		export function createService (intent: Titanium.Android.Intent) : Titanium.Android.Service;
		export function createServiceIntent (options: ServiceIntentOptions) : Titanium.Android.Intent;
		export function isServiceRunning (intent: Titanium.Android.Intent) : boolean;
		export function registerBroadcastReceiver (broadcastReceiver: Titanium.Android.BroadcastReceiver, actions: Array<String>) : void;
		export function unregisterBroadcastReceiver (broadcastReceiver: Titanium.Android.BroadcastReceiver) : void;
		export function startService (intent: Titanium.Android.Intent) : void;
		export function stopService (intent: Titanium.Android.Intent) : void;
		export function createBroadcastIntent (parameters?: Dictionary<Titanium.Android.Intent>) : Titanium.Android.Intent;
		export function getBubbleParent () : boolean;
		export function setBubbleParent (bubbleParent: boolean) : void;
		export function getApiName () : string;
		export function getLifecycleContainer () : any;
		export function setLifecycleContainer (lifecycleContainer: Titanium.UI.Window) : void;
		export function setLifecycleContainer (lifecycleContainer: Titanium.UI.TabGroup) : void;
		export function createBroadcastReceiver (parameters?: Dictionary<Titanium.Android.BroadcastReceiver>) : Titanium.Android.BroadcastReceiver;
		export function createIntent (parameters?: Dictionary<Titanium.Android.Intent>) : Titanium.Android.Intent;
		export function createNotification (parameters?: Dictionary<Titanium.Android.Notification>) : Titanium.Android.Notification;
		export function createRemoteViews (parameters?: Dictionary<Titanium.Android.RemoteViews>) : Titanium.Android.RemoteViews;
		export interface ActionBar extends Titanium.Proxy {
			backgroundImage : string;
			displayHomeAsUp : boolean;
			homeButtonEnabled : boolean;
			icon : string;
			logo : string;
			navigationMode : number;
			onHomeIconItemSelected : (...args : any[]) => any;
			subtitle : string;
			title : string;
			hide () : void;
			setDisplayShowHomeEnabled (show: boolean) : void;
			setDisplayShowTitleEnabled (show: boolean) : void;
			show () : void;
			setBackgroundImage (backgroundImage: string) : void;
			setDisplayHomeAsUp (displayHomeAsUp: boolean) : void;
			setHomeButtonEnabled (homeButtonEnabled: boolean) : void;
			setIcon (icon: string) : void;
			setLogo (logo: string) : void;
			getNavigationMode () : number;
			setNavigationMode (navigationMode: number) : void;
			setOnHomeIconItemSelected (onHomeIconItemSelected: (...args : any[]) => any) : void;
			getSubtitle () : string;
			setSubtitle (subtitle: string) : void;
			getTitle () : string;
			setTitle (title: string) : void;
		}
		export interface Activity extends Titanium.Proxy {
			actionBar : Titanium.Android.ActionBar;
			intent : Titanium.Android.Intent;
			onCreate : (...args : any[]) => any;
			onCreateOptionsMenu : (...args : any[]) => any;
			onDestroy : (...args : any[]) => any;
			onPause : (...args : any[]) => any;
			onPrepareOptionsMenu : (...args : any[]) => any;
			onRestart : (...args : any[]) => any;
			onResume : (...args : any[]) => any;
			onStart : (...args : any[]) => any;
			onStop : (...args : any[]) => any;
			requestedOrientation : number;
			finish () : void;
			getString (resourceId: number, format: any) : string;
			invalidateOptionsMenu () : void;
			setRequestedOrientation (orientation: number) : void;
			setResult (resultCode: number, intent?: Titanium.Android.Intent) : void;
			startActivity (intent: Titanium.Android.Intent) : void;
			startActivityForResult (intent: Titanium.Android.Intent, callback: (...args : any[]) => any) : void;
			openOptionsMenu () : void;
			sendBroadcast (intent: Titanium.Android.Intent) : void;
			sendBroadcastWithPermission (intent: Titanium.Android.Intent, receiverPermission?: string) : void;
			getActionBar () : Titanium.Android.ActionBar;
			getIntent () : Titanium.Android.Intent;
			getOnCreate () : (...args : any[]) => any;
			setOnCreate (onCreate: (...args : any[]) => any) : void;
			getOnCreateOptionsMenu () : (...args : any[]) => any;
			setOnCreateOptionsMenu (onCreateOptionsMenu: (...args : any[]) => any) : void;
			getOnDestroy () : (...args : any[]) => any;
			setOnDestroy (onDestroy: (...args : any[]) => any) : void;
			getOnPause () : (...args : any[]) => any;
			setOnPause (onPause: (...args : any[]) => any) : void;
			getOnPrepareOptionsMenu () : (...args : any[]) => any;
			setOnPrepareOptionsMenu (onPrepareOptionsMenu: (...args : any[]) => any) : void;
			getOnRestart () : (...args : any[]) => any;
			setOnRestart (onRestart: (...args : any[]) => any) : void;
			getOnResume () : (...args : any[]) => any;
			setOnResume (onResume: (...args : any[]) => any) : void;
			getOnStart () : (...args : any[]) => any;
			setOnStart (onStart: (...args : any[]) => any) : void;
			getOnStop () : (...args : any[]) => any;
			setOnStop (onStop: (...args : any[]) => any) : void;
		}
		export interface BigPictureStyle  {
			bigLargeIcon : any;
			bigPicture : any;
			bigContentTitle : string;
			decodeRetries : number;
			summaryText : string;
		}
		export interface BigTextStyle  {
			bigText : string;
			bigContentTitle : string;
			summaryText : string;
		}
		export interface BroadcastReceiver extends Titanium.Proxy {
			onReceived : (...args : any[]) => any;
			url : string;
			getOnReceived () : (...args : any[]) => any;
			setOnReceived (onReceived: (...args : any[]) => any) : void;
			getUrl () : string;
			setUrl (url: string) : void;
		}
		export module Calendar {
			export var bubbleParent : boolean;
			export var apiName : string;
			export var lifecycleContainer : any;
			export var METHOD_ALERT : number;
			export var METHOD_DEFAULT : number;
			export var METHOD_EMAIL : number;
			export var METHOD_SMS : number;
			export var STATE_DISMISSED : number;
			export var STATE_FIRED : number;
			export var STATE_SCHEDULED : number;
			export var STATUS_CANCELED : number;
			export var STATUS_CONFIRMED : number;
			export var STATUS_TENTATIVE : number;
			export var VISIBILITY_CONFIDENTIAL : number;
			export var VISIBILITY_DEFAULT : number;
			export var VISIBILITY_PRIVATE : number;
			export var VISIBILITY_PUBLIC : number;
			export var allAlerts : Array<Titanium.Android.Calendar.Alert>;
			export var allCalendars : Array<Titanium.Android.Calendar.Calendar>;
			export var selectableCalendars : Array<Titanium.Android.Calendar.Calendar>;
			export function addEventListener (name: string, callback: (...args : any[]) => any) : void;
			export function removeEventListener (name: string, callback: (...args : any[]) => any) : void;
			export function fireEvent (name: string, event: Dictionary<Object>) : void;
			export function applyProperties (props: Dictionary<Object>) : void;
			export function getCalendarById (id: number) : Titanium.Android.Calendar.Calendar;
			export function getBubbleParent () : boolean;
			export function setBubbleParent (bubbleParent: boolean) : void;
			export function getApiName () : string;
			export function getLifecycleContainer () : any;
			export function setLifecycleContainer (lifecycleContainer: Titanium.UI.Window) : void;
			export function setLifecycleContainer (lifecycleContainer: Titanium.UI.TabGroup) : void;
			export function getAllAlerts () : Array<Titanium.Android.Calendar.Alert>;
			export function getAllCalendars () : Array<Titanium.Android.Calendar.Calendar>;
			export function getSelectableCalendars () : Array<Titanium.Android.Calendar.Calendar>;
			export interface Alert extends Titanium.Proxy {
				alarmTime : Date;
				begin : Date;
				end : Date;
				eventId : number;
				id : string;
				minutes : number;
				state : number;
				getAlarmTime () : Date;
				getBegin () : Date;
				getEnd () : Date;
				getEventId () : number;
				getId () : string;
				getMinutes () : number;
				getState () : number;
			}
			export interface Calendar extends Titanium.Proxy {
				hidden : boolean;
				id : string;
				name : string;
				selected : boolean;
				createEvent (properties: Dictionary<Titanium.Android.Calendar.Event>) : Titanium.Android.Calendar.Event;
				getEventById (id: number) : Titanium.Android.Calendar.Event;
				getEventsBetweenDates (date1: Date, date2: Date) : Array<Titanium.Android.Calendar.Event>;
				getEventsInDate (year: number, month: number, day: number) : Array<Titanium.Android.Calendar.Event>;
				getEventsInMonth (year: number, month: number) : Array<Titanium.Android.Calendar.Event>;
				getEventsInYear (year: number) : Array<Titanium.Android.Calendar.Event>;
				getHidden () : boolean;
				getId () : string;
				getName () : string;
				getSelected () : boolean;
			}
			export interface Event extends Titanium.Proxy {
				alerts : Array<Titanium.Android.Calendar.Alert>;
				allDay : boolean;
				begin : Date;
				description : string;
				end : Date;
				extendedProperties : Dictionary<Object>;
				hasAlarm : boolean;
				hasExtendedProperties : boolean;
				id : string;
				location : string;
				reminders : Array<Titanium.Android.Calendar.Reminder>;
				status : number;
				title : string;
				visibility : number;
				createAlert (data: Dictionary<Titanium.Android.Calendar.Alert>) : Titanium.Android.Calendar.Alert;
				createReminder (data: Dictionary<Titanium.Android.Calendar.Reminder>) : Titanium.Android.Calendar.Reminder;
				getExtendedProperty (name: string) : string;
				setExtendedProperty (name: string, value: string) : void;
				getAlerts () : Array<Titanium.Android.Calendar.Alert>;
				getAllDay () : boolean;
				getBegin () : Date;
				getDescription () : string;
				getEnd () : Date;
				getExtendedProperties () : Dictionary<Object>;
				getHasAlarm () : boolean;
				getHasExtendedProperties () : boolean;
				getId () : string;
				getLocation () : string;
				getReminders () : Array<Titanium.Android.Calendar.Reminder>;
				getStatus () : number;
				getTitle () : string;
				getVisibility () : number;
			}
			export interface Reminder extends Titanium.Proxy {
				id : string;
				method : number;
				minutes : number;
				getId () : string;
				getMethod () : number;
				getMinutes () : number;
			}
		}
		export interface Intent extends Titanium.Proxy {
			action : string;
			className : string;
			data : string;
			flags : number;
			packageName : string;
			type : string;
			url : string;
			addCategory (name: string) : void;
			addFlags (flags: number) : void;
			getBlobExtra (name: string) : Titanium.Blob;
			getBooleanExtra (name: string) : boolean;
			getData () : string;
			getDoubleExtra (name: string) : number;
			getIntExtra (name: string) : number;
			getLongExtra (name: string) : number;
			getStringExtra (name: string) : string;
			hasExtra (name: string) : boolean;
			putExtra (name: string, value: any) : void;
			putExtraUri (name: string, value: any) : void;
			getAction () : string;
			setAction (action: string) : void;
			getClassName () : string;
			setClassName (className: string) : void;
			getData () : string;
			getFlags () : number;
			setFlags (flags: number) : void;
			getPackageName () : string;
			setPackageName (packageName: string) : void;
			getType () : string;
			getUrl () : string;
			setUrl (url: string) : void;
		}
		export interface Menu extends Titanium.Proxy {
			items : Array<Titanium.Android.MenuItem>;
			add (options: any) : Titanium.Android.MenuItem;
			clear () : void;
			close () : void;
			findItem (item: number) : Titanium.Android.MenuItem;
			findItem (item: Titanium.Android.MenuItem) : Titanium.Android.MenuItem;
			getItem (index: number) : Titanium.Android.MenuItem;
			hasVisibleItems () : boolean;
			removeGroup (groupId: number) : void;
			removeItem (itemId: number) : void;
			setGroupEnabled (groupId: number, enabled: boolean) : void;
			setGroupVisible (groupId: number, visible: boolean) : void;
			size () : number;
			getItems () : Array<Titanium.Android.MenuItem>;
		}
		export interface MenuItem extends Titanium.Proxy {
			actionView : Titanium.UI.View;
			actionViewExpanded : boolean;
			checkable : boolean;
			checked : boolean;
			enabled : boolean;
			groupId : number;
			icon : any;
			itemId : number;
			order : number;
			showAsAction : number;
			title : string;
			titleCondensed : string;
			visible : boolean;
			collapseActionView () : void;
			expandActionView () : void;
			isActionViewExpanded () : boolean;
			isCheckable () : boolean;
			isChecked () : boolean;
			isEnabled () : boolean;
			isVisible () : boolean;
			setCheckable (checkable: boolean) : void;
			setChecked (enabled: boolean) : void;
			setEnabled (enabled: boolean) : void;
			setVisible (visible: boolean) : void;
			getActionView () : Titanium.UI.View;
			setActionView (actionView: Titanium.UI.View) : void;
			getGroupId () : number;
			setIcon (icon: number) : void;
			setIcon (icon: string) : void;
			getItemId () : number;
			getOrder () : number;
			setShowAsAction (showAsAction: number) : void;
			getTitle () : string;
			setTitle (title: string) : void;
			getTitleCondensed () : string;
			setTitleCondensed (titleCondensed: string) : void;
		}
		export interface Notification extends Titanium.Proxy {
			audioStreamType : number;
			category : string;
			contentIntent : Titanium.Android.PendingIntent;
			contentText : string;
			contentTitle : string;
			contentView : Titanium.Android.RemoteViews;
			defaults : number;
			deleteIntent : Titanium.Android.PendingIntent;
			flags : number;
			icon : any;
			largeIcon : any;
			ledARGB : number;
			ledOffMS : number;
			ledOnMS : number;
			number : number;
			priority : number;
			sound : string;
			style : any;
			tickerText : string;
			visibility : number;
			when : any;
			setLatestEventInfo (contentTitle: string, contentText: string, contentIntent: Titanium.Android.PendingIntent) : void;
			getAudioStreamType () : number;
			setAudioStreamType (audioStreamType: number) : void;
			getCategory () : string;
			setCategory (category: string) : void;
			getContentIntent () : Titanium.Android.PendingIntent;
			setContentIntent (contentIntent: Titanium.Android.PendingIntent) : void;
			getContentText () : string;
			setContentText (contentText: string) : void;
			getContentTitle () : string;
			setContentTitle (contentTitle: string) : void;
			setContentView (contentView: Titanium.Android.RemoteViews) : void;
			getDefaults () : number;
			setDefaults (defaults: number) : void;
			getDeleteIntent () : Titanium.Android.PendingIntent;
			setDeleteIntent (deleteIntent: Titanium.Android.PendingIntent) : void;
			getFlags () : number;
			setFlags (flags: number) : void;
			getIcon () : any;
			setIcon (icon: number) : void;
			setIcon (icon: string) : void;
			getLargeIcon () : any;
			setLargeIcon (largeIcon: number) : void;
			setLargeIcon (largeIcon: string) : void;
			getLedARGB () : number;
			setLedARGB (ledARGB: number) : void;
			getLedOffMS () : number;
			setLedOffMS (ledOffMS: number) : void;
			getLedOnMS () : number;
			setLedOnMS (ledOnMS: number) : void;
			getNumber () : number;
			setNumber (number: number) : void;
			getPriority () : number;
			setPriority (priority: number) : void;
			getSound () : string;
			setSound (sound: string) : void;
			getStyle () : any;
			setStyle (style: Titanium.Android.BigTextStyle) : void;
			setStyle (style: Titanium.Android.BigPictureStyle) : void;
			getTickerText () : string;
			setTickerText (tickerText: string) : void;
			getVisibility () : number;
			setVisibility (visibility: number) : void;
			getWhen () : any;
			setWhen (when: Date) : void;
			setWhen (when: number) : void;
		}
		export interface NotificationManager  {
			DEFAULT_ALL : number;
			DEFAULT_LIGHTS : number;
			DEFAULT_SOUND : number;
			DEFAULT_VIBRATE : number;
			FLAG_AUTO_CANCEL : number;
			FLAG_INSISTENT : number;
			FLAG_NO_CLEAR : number;
			FLAG_ONGOING_EVENT : number;
			FLAG_ONLY_ALERT_ONCE : number;
			FLAG_SHOW_LIGHTS : number;
			STREAM_DEFAULT : number;
			cancel (id: number) : void;
			cancelAll () : void;
			notify (id: number, notification: Titanium.Android.Notification) : void;
		}
		export interface PendingIntent extends Titanium.Proxy {
			flags : number;
			intent : Titanium.Android.Intent;
			updateCurrentIntent : boolean;
			getFlags () : number;
			setFlags (flags: number) : void;
			getIntent () : Titanium.Android.Intent;
			setIntent (intent: Titanium.Android.Intent) : void;
			getUpdateCurrentIntent () : boolean;
			setUpdateCurrentIntent (updateCurrentIntent: boolean) : void;
		}
		export interface R extends Titanium.Proxy {
			anim : any;
			array : any;
			attr : any;
			color : any;
			dimen : any;
			drawable : any;
			id : any;
			integer : any;
			layout : any;
			string : any;
			style : any;
			styleable : any;
		}
		export interface RemoteViews extends Titanium.Proxy {
			layoutId : number;
			packageName : string;
			setBoolean (viewId: number, methodName: string, value: boolean) : void;
			setChronometer (viewId: number, base: Date, format: string, started: boolean) : void;
			setDouble (viewId: number, methodName: string, value: number) : void;
			setImageViewResource (viewId: number, srcId: number) : void;
			setImageViewUri (viewId: number, uri: string) : void;
			setInt (viewId: number, methodName: string, value: number) : void;
			setOnClickPendingIntent (viewId: number, pendingIntent: Titanium.Android.PendingIntent) : void;
			setProgressBar (viewId: number, max: number, progress: number, indeterminate: boolean) : void;
			setString (viewId: number, methodName: string, value: string) : void;
			setTextColor (viewId: number, color: number) : void;
			setTextViewText (viewId: number, text: string) : void;
			setUri (viewId: number, methodName: string, value: string) : void;
			setViewVisibility (viewId: number, visibility: number) : void;
			getLayoutId () : number;
			setLayoutId (layoutId: number) : void;
			getPackageName () : string;
			setPackageName (packageName: string) : void;
		}
		export interface Service extends Titanium.Proxy {
			intent : Titanium.Android.Intent;
			serviceInstanceId : number;
			start () : void;
			stop () : void;
			getIntent () : Titanium.Android.Intent;
			getServiceInstanceId () : number;
		}
	}
	export module App {
		export var bubbleParent : boolean;
		export var apiName : string;
		export var lifecycleContainer : any;
		export var EVENT_ACCESSIBILITY_ANNOUNCEMENT : string;
		export var EVENT_ACCESSIBILITY_CHANGED : string;
		export var accessibilityEnabled : boolean;
		export var analytics : boolean;
		export var copyright : string;
		export var deployType : string;
		export var description : string;
		export var guid : string;
		export var forceSplashAsSnapshot : boolean;
		export var id : string;
		export var installId : string;
		export var idleTimerDisabled : boolean;
		export var name : string;
		export var proximityDetection : boolean;
		export var proximityState : boolean;
		export var disableNetworkActivityIndicator : boolean;
		export var publisher : string;
		export var sessionId : string;
		export var url : string;
		export var version : string;
		export var keyboardVisible : boolean;
		export function addEventListener (name: string, callback: (...args : any[]) => any) : void;
		export function removeEventListener (name: string, callback: (...args : any[]) => any) : void;
		export function fireEvent (name: string, event: Dictionary<Object>) : void;
		export function applyProperties (props: Dictionary<Object>) : void;
		export function fireSystemEvent (eventName: string, param?: any) : void;
		export function getArguments () : launchOptions;
		export function getBubbleParent () : boolean;
		export function setBubbleParent (bubbleParent: boolean) : void;
		export function getApiName () : string;
		export function getLifecycleContainer () : any;
		export function setLifecycleContainer (lifecycleContainer: Titanium.UI.Window) : void;
		export function setLifecycleContainer (lifecycleContainer: Titanium.UI.TabGroup) : void;
		export function getAccessibilityEnabled () : boolean;
		export function getAnalytics () : boolean;
		export function getCopyright () : string;
		export function getDeployType () : string;
		export function getDescription () : string;
		export function getGuid () : string;
		export function getForceSplashAsSnapshot () : boolean;
		export function setForceSplashAsSnapshot (forceSplashAsSnapshot: boolean) : void;
		export function getId () : string;
		export function getInstallId () : string;
		export function getIdleTimerDisabled () : boolean;
		export function setIdleTimerDisabled (idleTimerDisabled: boolean) : void;
		export function getName () : string;
		export function getProximityDetection () : boolean;
		export function setProximityDetection (proximityDetection: boolean) : void;
		export function getProximityState () : boolean;
		export function getDisableNetworkActivityIndicator () : boolean;
		export function setDisableNetworkActivityIndicator (disableNetworkActivityIndicator: boolean) : void;
		export function getPublisher () : string;
		export function getSessionId () : string;
		export function getUrl () : string;
		export function getVersion () : string;
		export function getKeyboardVisible () : boolean;
		export module Android {
			export var bubbleParent : boolean;
			export var apiName : string;
			export var lifecycleContainer : any;
			export var R : Titanium.App.Android.R;
			export var appVersionCode : number;
			export var appVersionName : string;
			export var launchIntent : Titanium.Android.Intent;
			export function addEventListener (name: string, callback: (...args : any[]) => any) : void;
			export function removeEventListener (name: string, callback: (...args : any[]) => any) : void;
			export function fireEvent (name: string, event: Dictionary<Object>) : void;
			export function applyProperties (props: Dictionary<Object>) : void;
			export function getBubbleParent () : boolean;
			export function setBubbleParent (bubbleParent: boolean) : void;
			export function getApiName () : string;
			export function getLifecycleContainer () : any;
			export function setLifecycleContainer (lifecycleContainer: Titanium.UI.Window) : void;
			export function setLifecycleContainer (lifecycleContainer: Titanium.UI.TabGroup) : void;
			export function getAppVersionCode () : number;
			export function getAppVersionName () : string;
			export function getLaunchIntent () : Titanium.Android.Intent;
			export enum R {

			}
		}
		export interface Properties  {
			getBool (property: string, _default?: boolean) : boolean;
			getDouble (property: string, _default?: number) : number;
			getInt (property: string, _default?: number) : number;
			getList (property: string, _default?: Array<Object>) : Array<Object>;
			getObject (property: string, _default?: any) : any;
			getString (property: string, _default?: string) : string;
			hasProperty (property: string) : boolean;
			listProperties () : Array<Object>;
			removeProperty (property: string) : void;
			setBool (property: string, value: boolean) : void;
			setDouble (property: string, value: number) : void;
			setInt (property: string, value: number) : void;
			setList (property: string, value: Array<Object>) : void;
			setObject (property: string, value: any) : void;
			setString (property: string, value: string) : void;
		}
		export module iOS {
			export var bubbleParent : boolean;
			export var apiName : string;
			export var EVENT_ACCESSIBILITY_LAYOUT_CHANGED : string;
			export var EVENT_ACCESSIBILITY_SCREEN_CHANGED : string;
			export var BACKGROUNDFETCHINTERVAL_MIN : number;
			export var BACKGROUNDFETCHINTERVAL_NEVER : number;
			export var USER_NOTIFICATION_TYPE_NONE : number;
			export var USER_NOTIFICATION_TYPE_BADGE : number;
			export var USER_NOTIFICATION_TYPE_SOUND : number;
			export var USER_NOTIFICATION_TYPE_ALERT : number;
			export var USER_NOTIFICATION_ACTIVATION_MODE_BACKGROUND : number;
			export var USER_NOTIFICATION_ACTIVATION_MODE_FOREGROUND : number;
			export var USER_NOTIFICATION_BEHAVIOR_DEFAULT : number;
			export var USER_NOTIFICATION_BEHAVIOR_TEXTINPUT : number;
			export var UTTYPE_TEXT : string;
			export var UTTYPE_PLAIN_TEXT : string;
			export var UTTYPE_UTF8_PLAIN_TEXT : string;
			export var UTTYPE_UTF16_EXTERNAL_PLAIN_TEXT : string;
			export var UTTYPE_UTF16_PLAIN_TEXT : string;
			export var UTTYPE_RTF : string;
			export var UTTYPE_HTML : string;
			export var UTTYPE_XML : string;
			export var UTTYPE_PDF : string;
			export var UTTYPE_RTFD : string;
			export var UTTYPE_FLAT_RTFD : string;
			export var UTTYPE_TXN_TEXT_AND_MULTIMEDIA_DATA : string;
			export var UTTYPE_WEB_ARCHIVE : string;
			export var UTTYPE_IMAGE : string;
			export var UTTYPE_JPEG : string;
			export var UTTYPE_JPEG2000 : string;
			export var UTTYPE_TIFF : string;
			export var UTTYPE_PICT : string;
			export var UTTYPE_GIF : string;
			export var UTTYPE_PNG : string;
			export var UTTYPE_QUICKTIME_IMAGE : string;
			export var UTTYPE_APPLE_ICNS : string;
			export var UTTYPE_BMP : string;
			export var UTTYPE_ICO : string;
			export var UTTYPE_MOVIE : string;
			export var UTTYPE_VIDEO : string;
			export var UTTYPE_AUDIO : string;
			export var UTTYPE_QUICKTIME_MOVIE : string;
			export var UTTYPE_MPEG : string;
			export var UTTYPE_MPEG4 : string;
			export var UTTYPE_MP3 : string;
			export var UTTYPE_MPEG4_AUDIO : string;
			export var UTTYPE_APPLE_PROTECTED_MPEG4_AUDIO : string;
			export var currentUserNotificationSettings : UserNotificationSettings;
			export var supportedUserActivityTypes : Array<String>;
			export var applicationOpenSettingsURL : string;
			export function addEventListener (name: string, callback: (...args : any[]) => any) : void;
			export function removeEventListener (name: string, callback: (...args : any[]) => any) : void;
			export function fireEvent (name: string, event: Dictionary<Object>) : void;
			export function applyProperties (props: Dictionary<Object>) : void;
			export function createUserDefaults (parameters: Dictionary<Titanium.App.iOS.UserDefaults>) : Titanium.App.iOS.UserDefaults;
			export function cancelAllLocalNotifications () : void;
			export function cancelLocalNotification (id: number) : void;
			export function cancelLocalNotification (id: string) : void;
			export function registerBackgroundService (params: Dictionary<Object>) : Titanium.App.iOS.BackgroundService;
			export function registerUserNotificationSettings (params: UserNotificationSettings) : void;
			export function scheduleLocalNotification (params: NotificationParams) : Titanium.App.iOS.LocalNotification;
			export function setMinimumBackgroundFetchInterval (fetchInterval: number) : void;
			export function endBackgroundHandler (handlerID: string) : void;
			export function sendWatchExtensionReply (handlerId: string, userInfo: Dictionary<Object>) : void;
			export function createSearchableIndex (parameters?: Dictionary<Titanium.App.iOS.SearchableIndex>) : Titanium.App.iOS.SearchableIndex;
			export function createSearchableItem (parameters?: Dictionary<Titanium.App.iOS.SearchableItem>) : Titanium.App.iOS.SearchableItem;
			export function createSearchableItemAttributeSet (parameters?: Dictionary<Titanium.App.iOS.SearchableItemAttributeSet>) : Titanium.App.iOS.SearchableItemAttributeSet;
			export function createUserActivity (parameters?: Dictionary<Titanium.App.iOS.UserActivity>) : Titanium.App.iOS.UserActivity;
			export function createUserNotificationAction (parameters?: Dictionary<Titanium.App.iOS.UserNotificationAction>) : Titanium.App.iOS.UserNotificationAction;
			export function createUserNotificationCategory (parameters?: Dictionary<Titanium.App.iOS.UserNotificationCategory>) : Titanium.App.iOS.UserNotificationCategory;
			export function getBubbleParent () : boolean;
			export function setBubbleParent (bubbleParent: boolean) : void;
			export function getApiName () : string;
			export function getCurrentUserNotificationSettings () : UserNotificationSettings;
			export function getSupportedUserActivityTypes () : Array<String>;
			export function getApplicationOpenSettingsURL () : string;
			export interface BackgroundService extends Titanium.Proxy {
				url : string;
				stop () : void;
				unregister () : void;
				getUrl () : string;
				setUrl (url: string) : void;
			}
			export interface LocalNotification extends Titanium.Proxy {
				cancel () : void;
			}
			export interface SearchableIndex extends Titanium.Proxy {
				isSupported () : boolean;
				addToDefaultSearchableIndex (Array: Array<Titanium.App.iOS.SearchableItem>, callback: (...args : any[]) => any) : void;
				deleteAllSearchableItems (callback: (...args : any[]) => any) : void;
				deleteAllSearchableItemByDomainIdenifiers (Array: Array<String>, callback: (...args : any[]) => any) : void;
				deleteSearchableItemsByIdentifiers (Array: Array<String>, callback: (...args : any[]) => any) : void;
			}
			export interface SearchableItem extends Titanium.Proxy {
				attributeSet : Titanium.App.iOS.SearchableItemAttributeSet;
				domainIdentifier : string;
				expirationDate : string;
				uniqueIdentifier : string;
				getDomainIdentifier () : string;
				setDomainIdentifier (domainIdentifier: string) : void;
				getExpirationDate () : string;
				setExpirationDate (expirationDate: string) : void;
				getUniqueIdentifier () : string;
				setUniqueIdentifier (uniqueIdentifier: string) : void;
			}
			export interface SearchableItemAttributeSet extends Titanium.Proxy {
				itemContentType : string;
				displayName : string;
				alternateNames : Array<String>;
				path : string;
				contentURL : string;
				thumbnailURL : string;
				thumbnailData : any;
				relatedUniqueIdentifier : string;
				metadataModificationDate : string;
				contentType : string;
				contentTypeTree : Array<String>;
				keywords : Array<String>;
				title : string;
				subject : string;
				theme : string;
				contentDescription : string;
				identifier : string;
				audiences : Array<String>;
				fileSize : number;
				pageCount : number;
				pageWidth : number;
				pageHeight : number;
				securityMethod : string;
				creator : string;
				encodingApplications : Array<String>;
				kind : string;
				fontNames : Array<String>;
				audioSampleRate : number;
				audioChannelCount : number;
				tempo : number;
				keySignature : string;
				timeSignature : string;
				audioEncodingApplication : string;
				composer : string;
				lyricist : string;
				album : string;
				artist : string;
				audioTrackNumber : number;
				recordingDate : string;
				musicalGenre : string;
				generalMIDISequence : number;
				musicalInstrumentCategory : string;
				musicalInstrumentName : string;
				supportsPhoneCall : number;
				supportsNavigation : number;
				containerTitle : string;
				containerDisplayName : string;
				containerIdentifier : string;
				containerOrder : number;
				editors : Array<String>;
				participants : Array<String>;
				projects : Array<String>;
				downloadedDate : string;
				lastUsedDate : string;
				contentCreationDate : string;
				contentModificationDate : string;
				addedDate : string;
				contentSources : Array<String>;
				comment : string;
				copyright : string;
				duration : number;
				contactKeywords : Array<String>;
				codecs : Array<String>;
				organizations : Array<String>;
				mediaTypes : Array<String>;
				version : string;
				role : string;
				streamable : number;
				totalBitRate : number;
				videoBitRate : number;
				audioBitRate : number;
				deliveryType : number;
				languages : Array<String>;
				rights : Array<String>;
				publishers : Array<String>;
				contributors : Array<String>;
				coverage : Array<String>;
				rating : number;
				ratingDescription : string;
				playCount : number;
				information : string;
				director : string;
				producer : string;
				genre : string;
				performers : Array<String>;
				originalFormat : string;
				originalSource : string;
				local : number;
				contentRating : number;
				url : string;
				getDisplayName () : string;
				setDisplayName (displayName: string) : void;
				getAlternateNames () : Array<String>;
				setAlternateNames (alternateNames: Array<String>) : void;
				getPath () : string;
				setPath (path: string) : void;
				getContentURL () : string;
				setContentURL (contentURL: string) : void;
				getThumbnailURL () : string;
				setThumbnailURL (thumbnailURL: string) : void;
				getThumbnailData () : any;
				setThumbnailData (thumbnailData: string) : void;
				setThumbnailData (thumbnailData: Titanium.Blob) : void;
				getRelatedUniqueIdentifier () : string;
				setRelatedUniqueIdentifier (relatedUniqueIdentifier: string) : void;
				getMetadataModificationDate () : string;
				setMetadataModificationDate (metadataModificationDate: string) : void;
				getContentType () : string;
				setContentType (contentType: string) : void;
				getContentTypeTree () : Array<String>;
				setContentTypeTree (contentTypeTree: Array<String>) : void;
				getKeywords () : Array<String>;
				setKeywords (keywords: Array<String>) : void;
				getTitle () : string;
				setTitle (title: string) : void;
				getSubject () : string;
				setSubject (subject: string) : void;
				getTheme () : string;
				setTheme (theme: string) : void;
				getContentDescription () : string;
				setContentDescription (contentDescription: string) : void;
				getIdentifier () : string;
				setIdentifier (identifier: string) : void;
				getAudiences () : Array<String>;
				setAudiences (audiences: Array<String>) : void;
				getFileSize () : number;
				setFileSize (fileSize: number) : void;
				getPageCount () : number;
				setPageCount (pageCount: number) : void;
				getPageWidth () : number;
				setPageWidth (pageWidth: number) : void;
				getPageHeight () : number;
				setPageHeight (pageHeight: number) : void;
				getSecurityMethod () : string;
				setSecurityMethod (securityMethod: string) : void;
				getCreator () : string;
				setCreator (creator: string) : void;
				getEncodingApplications () : Array<String>;
				setEncodingApplications (encodingApplications: Array<String>) : void;
				getKind () : string;
				setKind (kind: string) : void;
				getFontNames () : Array<String>;
				setFontNames (fontNames: Array<String>) : void;
				getAudioSampleRate () : number;
				setAudioSampleRate (audioSampleRate: number) : void;
				getAudioChannelCount () : number;
				setAudioChannelCount (audioChannelCount: number) : void;
				getTempo () : number;
				setTempo (tempo: number) : void;
				getKeySignature () : string;
				setKeySignature (keySignature: string) : void;
				getTimeSignature () : string;
				setTimeSignature (timeSignature: string) : void;
				getAudioEncodingApplication () : string;
				setAudioEncodingApplication (audioEncodingApplication: string) : void;
				getComposer () : string;
				setComposer (composer: string) : void;
				getLyricist () : string;
				setLyricist (lyricist: string) : void;
				getAlbum () : string;
				setAlbum (album: string) : void;
				getArtist () : string;
				setArtist (artist: string) : void;
				getAudioTrackNumber () : number;
				setAudioTrackNumber (audioTrackNumber: number) : void;
				getRecordingDate () : string;
				setRecordingDate (recordingDate: string) : void;
				getMusicalGenre () : string;
				setMusicalGenre (musicalGenre: string) : void;
				getGeneralMIDISequence () : number;
				setGeneralMIDISequence (generalMIDISequence: number) : void;
				getMusicalInstrumentCategory () : string;
				setMusicalInstrumentCategory (musicalInstrumentCategory: string) : void;
				getMusicalInstrumentName () : string;
				setMusicalInstrumentName (musicalInstrumentName: string) : void;
				getSupportsPhoneCall () : number;
				setSupportsPhoneCall (supportsPhoneCall: number) : void;
				getSupportsNavigation () : number;
				setSupportsNavigation (supportsNavigation: number) : void;
				getContainerTitle () : string;
				setContainerTitle (containerTitle: string) : void;
				getContainerDisplayName () : string;
				setContainerDisplayName (containerDisplayName: string) : void;
				getContainerIdentifier () : string;
				setContainerIdentifier (containerIdentifier: string) : void;
				getContainerOrder () : number;
				setContainerOrder (containerOrder: number) : void;
				getEditors () : Array<String>;
				setEditors (editors: Array<String>) : void;
				getParticipants () : Array<String>;
				setParticipants (participants: Array<String>) : void;
				getProjects () : Array<String>;
				setProjects (projects: Array<String>) : void;
				getDownloadedDate () : string;
				setDownloadedDate (downloadedDate: string) : void;
				getLastUsedDate () : string;
				setLastUsedDate (lastUsedDate: string) : void;
				getContentCreationDate () : string;
				setContentCreationDate (contentCreationDate: string) : void;
				getContentModificationDate () : string;
				setContentModificationDate (contentModificationDate: string) : void;
				getAddedDate () : string;
				setAddedDate (addedDate: string) : void;
				getContentSources () : Array<String>;
				setContentSources (contentSources: Array<String>) : void;
				getComment () : string;
				setComment (comment: string) : void;
				getCopyright () : string;
				setCopyright (copyright: string) : void;
				getDuration () : number;
				setDuration (duration: number) : void;
				getContactKeywords () : Array<String>;
				setContactKeywords (contactKeywords: Array<String>) : void;
				getCodecs () : Array<String>;
				setCodecs (codecs: Array<String>) : void;
				getOrganizations () : Array<String>;
				setOrganizations (organizations: Array<String>) : void;
				getMediaTypes () : Array<String>;
				setMediaTypes (mediaTypes: Array<String>) : void;
				getVersion () : string;
				setVersion (version: string) : void;
				getRole () : string;
				setRole (role: string) : void;
				getStreamable () : number;
				setStreamable (streamable: number) : void;
				getTotalBitRate () : number;
				setTotalBitRate (totalBitRate: number) : void;
				getVideoBitRate () : number;
				setVideoBitRate (videoBitRate: number) : void;
				getAudioBitRate () : number;
				setAudioBitRate (audioBitRate: number) : void;
				getDeliveryType () : number;
				setDeliveryType (deliveryType: number) : void;
				getLanguages () : Array<String>;
				setLanguages (languages: Array<String>) : void;
				getRights () : Array<String>;
				setRights (rights: Array<String>) : void;
				getPublishers () : Array<String>;
				setPublishers (publishers: Array<String>) : void;
				getContributors () : Array<String>;
				setContributors (contributors: Array<String>) : void;
				getCoverage () : Array<String>;
				setCoverage (coverage: Array<String>) : void;
				getRating () : number;
				setRating (rating: number) : void;
				getRatingDescription () : string;
				setRatingDescription (ratingDescription: string) : void;
				getPlayCount () : number;
				setPlayCount (playCount: number) : void;
				getInformation () : string;
				setInformation (information: string) : void;
				getDirector () : string;
				setDirector (director: string) : void;
				getProducer () : string;
				setProducer (producer: string) : void;
				getGenre () : string;
				setGenre (genre: string) : void;
				getPerformers () : Array<String>;
				setPerformers (performers: Array<String>) : void;
				getOriginalFormat () : string;
				setOriginalFormat (originalFormat: string) : void;
				getOriginalSource () : string;
				setOriginalSource (originalSource: string) : void;
				getLocal () : number;
				setLocal (local: number) : void;
				getContentRating () : number;
				setContentRating (contentRating: number) : void;
				getUrl () : string;
				setUrl (url: string) : void;
			}
			export interface UserActivity extends Titanium.Proxy {
				activityType : string;
				eligibleForPublicIndexing : boolean;
				eligibleForSearch : boolean;
				eligibleForHandoff : boolean;
				expirationDate : string;
				keywords : Array<String>;
				needsSave : boolean;
				requiredUserInfoKeys : Array<String>;
				supported : boolean;
				title : string;
				userInfo : Dictionary<Object>;
				webpageURL : string;
				addContentAttributeSet (contentAttributeSet: Titanium.App.iOS.SearchableItemAttributeSet) : void;
				becomeCurrent () : void;
				invalidate () : void;
				resignCurrent () : void;
				isSupported () : boolean;
				getActivityType () : string;
				setActivityType (activityType: string) : void;
				getEligibleForPublicIndexing () : boolean;
				setEligibleForPublicIndexing (eligibleForPublicIndexing: boolean) : void;
				getEligibleForSearch () : boolean;
				setEligibleForSearch (eligibleForSearch: boolean) : void;
				getEligibleForHandoff () : boolean;
				setEligibleForHandoff (eligibleForHandoff: boolean) : void;
				getExpirationDate () : string;
				setExpirationDate (expirationDate: string) : void;
				getKeywords () : Array<String>;
				setKeywords (keywords: Array<String>) : void;
				getNeedsSave () : boolean;
				setNeedsSave (needsSave: boolean) : void;
				getRequiredUserInfoKeys () : Array<String>;
				setRequiredUserInfoKeys (requiredUserInfoKeys: Array<String>) : void;
				getSupported () : boolean;
				setSupported (supported: boolean) : void;
				getTitle () : string;
				setTitle (title: string) : void;
				getUserInfo () : Dictionary<Object>;
				setUserInfo (userInfo: Dictionary<Object>) : void;
				getWebpageURL () : string;
				setWebpageURL (webpageURL: string) : void;
			}
			export interface UserDefaults extends Titanium.App.Properties {
				suiteName : string;
				getSuiteName () : string;
				setSuiteName (suiteName: string) : void;
			}
			export interface UserNotificationAction extends Titanium.Proxy {
				activationMode : number;
				behavior : number;
				authenticationRequired : boolean;
				destructive : boolean;
				identifier : string;
				title : string;
				getActivationMode () : number;
				setActivationMode (activationMode: number) : void;
				getBehavior () : number;
				setBehavior (behavior: number) : void;
			}
			export interface UserNotificationCategory extends Titanium.Proxy {
				actionsForDefaultContext : Array<Titanium.App.iOS.UserNotificationAction>;
				actionsForMinimalContext : Array<Titanium.App.iOS.UserNotificationAction>;
				identifier : string;
			}
		}
	}
	export interface Blob extends Titanium.Proxy {
		file : Titanium.Filesystem.File;
		length : number;
		text : string;
		mimeType : string;
		height : number;
		width : number;
		nativePath : string;
		size : number;
		toString () : string;
		append (blob: Titanium.Blob) : void;
		imageAsCropped (options: Dictionary<ImageAsCroppedDict>) : Titanium.Blob;
		imageAsResized (width: number, height: number) : Titanium.Blob;
		imageAsThumbnail (size: number, borderSize?: number, cornerRadius?: number) : Titanium.Blob;
		imageWithAlpha () : Titanium.Blob;
		imageWithRoundedCorner (cornerSize: number, borderSize?: number) : Titanium.Blob;
		imageWithTransparentBorder (size: number) : Titanium.Blob;
		getFile () : Titanium.Filesystem.File;
		getLength () : number;
		getText () : string;
		getMimeType () : string;
		getHeight () : number;
		getWidth () : number;
		getNativePath () : string;
		getSize () : number;
	}
	export enum BlobStream {

	}
	export interface IOStream extends Titanium.Proxy {
		read (buffer: Titanium.Buffer, offset?: number, length?: number) : number;
		write (buffer: Titanium.Buffer, offset?: number, length?: number) : number;
		isWritable () : boolean;
		isReadable () : boolean;
		close () : void;
	}
	export interface Buffer extends Titanium.Proxy {
		length : number;
		value : any;
		type : string;
		byteOrder : number;
		append (sourceBuffer: Titanium.Buffer, sourceOffset?: number, sourceLength?: number) : number;
		insert (sourceBuffer: Titanium.Buffer, offset: number, sourceOffset?: number, sourceLength?: number) : number;
		copy (sourceBuffer: Titanium.Buffer, offset: number, sourceOffset?: number, sourceLength?: number) : number;
		clone (offset?: number, length?: number) : Titanium.Buffer;
		fill (fillByte: number, offset?: number, length?: number) : void;
		clear () : void;
		release () : void;
		toString () : string;
		toBlob () : Titanium.Blob;
		getLength () : number;
		setLength (length: number) : void;
		getValue () : any;
		setValue (value: number) : void;
		setValue (value: string) : void;
		getType () : string;
		setType (type: string) : void;
		getByteOrder () : number;
		setByteOrder (byteOrder: number) : void;
	}
	export enum BufferStream {

	}
	export module Calendar {
		export var bubbleParent : boolean;
		export var apiName : string;
		export var lifecycleContainer : any;
		export var METHOD_ALERT : number;
		export var METHOD_DEFAULT : number;
		export var METHOD_EMAIL : number;
		export var METHOD_SMS : number;
		export var STATE_DISMISSED : number;
		export var STATE_FIRED : number;
		export var STATE_SCHEDULED : number;
		export var STATUS_NONE : number;
		export var STATUS_CANCELLED : number;
		export var STATUS_CANCELED : number;
		export var STATUS_CONFIRMED : number;
		export var STATUS_TENTATIVE : number;
		export var AVAILABILITY_NOTSUPPORTED : number;
		export var AVAILABILITY_BUSY : number;
		export var AVAILABILITY_FREE : number;
		export var AVAILABILITY_TENTATIVE : number;
		export var AVAILABILITY_UNAVAILABLE : number;
		export var AUTHORIZATION_AUTHORIZED : number;
		export var AUTHORIZATION_DENIED : number;
		export var AUTHORIZATION_RESTRICTED : number;
		export var AUTHORIZATION_UNKNOWN : number;
		export var SPAN_THISEVENT : number;
		export var SPAN_FUTUREEVENTS : number;
		export var RECURRENCEFREQUENCY_DAILY : number;
		export var RECURRENCEFREQUENCY_WEEKLY : number;
		export var RECURRENCEFREQUENCY_MONTHLY : number;
		export var RECURRENCEFREQUENCY_YEARLY : number;
		export var VISIBILITY_CONFIDENTIAL : number;
		export var VISIBILITY_DEFAULT : number;
		export var VISIBILITY_PRIVATE : number;
		export var VISIBILITY_PUBLIC : number;
		export var eventsAuthorization : number;
		export var calendarAuthorization : number;
		export var allAlerts : Array<Titanium.Calendar.Alert>;
		export var allCalendars : Array<Titanium.Calendar.Calendar>;
		export var allEditableCalendars : Array<Titanium.Calendar.Calendar>;
		export var selectableCalendars : Array<Titanium.Calendar.Calendar>;
		export var defaultCalendar : Titanium.Calendar.Calendar;
		export function addEventListener (name: string, callback: (...args : any[]) => any) : void;
		export function removeEventListener (name: string, callback: (...args : any[]) => any) : void;
		export function fireEvent (name: string, event: Dictionary<Object>) : void;
		export function applyProperties (props: Dictionary<Object>) : void;
		export function getCalendarById (id: string) : Titanium.Calendar.Calendar;
		export function hasCalendarPermissions () : boolean;
		export function requestCalendarPermissions (callback: (...args : any[]) => any) : void;
		export function requestEventsAuthorization (callback: (...args : any[]) => any) : void;
		export function getBubbleParent () : boolean;
		export function setBubbleParent (bubbleParent: boolean) : void;
		export function getApiName () : string;
		export function getLifecycleContainer () : any;
		export function setLifecycleContainer (lifecycleContainer: Titanium.UI.Window) : void;
		export function setLifecycleContainer (lifecycleContainer: Titanium.UI.TabGroup) : void;
		export function getEventsAuthorization () : number;
		export function getCalendarAuthorization () : number;
		export function getAllAlerts () : Array<Titanium.Calendar.Alert>;
		export function getAllCalendars () : Array<Titanium.Calendar.Calendar>;
		export function getAllEditableCalendars () : Array<Titanium.Calendar.Calendar>;
		export function getSelectableCalendars () : Array<Titanium.Calendar.Calendar>;
		export function getDefaultCalendar () : Titanium.Calendar.Calendar;
		export interface Alert extends Titanium.Proxy {
			absoluteDate : Date;
			relativeOffset : number;
			alarmTime : Date;
			begin : Date;
			end : Date;
			eventId : number;
			id : string;
			minutes : number;
			state : number;
			getAbsoluteDate () : Date;
			setAbsoluteDate (absoluteDate: Date) : void;
			getRelativeOffset () : number;
			setRelativeOffset (relativeOffset: number) : void;
			getAlarmTime () : Date;
			getBegin () : Date;
			getEnd () : Date;
			getEventId () : number;
			getId () : string;
			getMinutes () : number;
			getState () : number;
		}
		export interface Calendar extends Titanium.Proxy {
			hidden : boolean;
			id : string;
			name : string;
			selected : boolean;
			createEvent (properties: Dictionary<Titanium.Calendar.Event>) : Titanium.Calendar.Event;
			getEventById (id: number) : Titanium.Calendar.Event;
			getEventsBetweenDates (date1: Date, date2: Date) : Array<Titanium.Calendar.Event>;
			getEventsBetweenDates (date1: string, date2: string) : Array<Titanium.Calendar.Event>;
			getEventsBetweenDates (date1: string, date2: Date) : Array<Titanium.Calendar.Event>;
			getEventsBetweenDates (date1: Date, date2: string) : Array<Titanium.Calendar.Event>;
			getEventsInDate (year: number, month: number, day: number) : Array<Titanium.Calendar.Event>;
			getEventsInMonth (year: number, month: number) : Array<Titanium.Calendar.Event>;
			getEventsInYear (year: number) : Array<Titanium.Calendar.Event>;
			getHidden () : boolean;
			getId () : string;
			getName () : string;
			getSelected () : boolean;
		}
		export interface Event extends Titanium.Proxy {
			alerts : Array<Titanium.Calendar.Alert>;
			allDay : boolean;
			begin : Date;
			notes : string;
			description : string;
			end : Date;
			extendedProperties : Dictionary<Object>;
			hasAlarm : boolean;
			id : string;
			location : string;
			reminders : Array<Titanium.Calendar.Reminder>;
			status : number;
			availability : number;
			isDetached : boolean;
			title : string;
			recurrenceRule : Titanium.Calendar.RecurrenceRule;
			recurrenceRules : Array<Titanium.Calendar.RecurrenceRule>;
			visibility : number;
			createAlert (data: Dictionary<Titanium.Calendar.Alert>) : Titanium.Calendar.Alert;
			createReminder (data: Dictionary<Titanium.Calendar.Reminder>) : Titanium.Calendar.Reminder;
			getExtendedProperty (name: string) : string;
			setExtendedProperty (name: string, value: string) : void;
			createRecurrenceRule (data: Dictionary<Titanium.Calendar.RecurrenceRule>) : Titanium.Calendar.RecurrenceRule;
			save (span: number) : boolean;
			remove (span: number) : boolean;
			refresh () : boolean;
			addRecurrenceRule (rule: Titanium.Calendar.RecurrenceRule) : void;
			removeRecurrenceRule (rule: Titanium.Calendar.RecurrenceRule) : void;
			getAlerts () : Array<Titanium.Calendar.Alert>;
			setAlerts (alerts: Array<Titanium.Calendar.Alert>) : void;
			getAllDay () : boolean;
			setAllDay (allDay: boolean) : void;
			getBegin () : Date;
			setBegin (begin: Date) : void;
			getNotes () : string;
			setNotes (notes: string) : void;
			getDescription () : string;
			getEnd () : Date;
			setEnd (end: Date) : void;
			getExtendedProperties () : Dictionary<Object>;
			getHasAlarm () : boolean;
			getId () : string;
			getLocation () : string;
			setLocation (location: string) : void;
			getReminders () : Array<Titanium.Calendar.Reminder>;
			getStatus () : number;
			getAvailability () : number;
			getIsDetached () : boolean;
			getTitle () : string;
			setTitle (title: string) : void;
			getRecurrenceRule () : Titanium.Calendar.RecurrenceRule;
			setRecurrenceRule (recurrenceRule: Titanium.Calendar.RecurrenceRule) : void;
			getRecurrenceRules () : Array<Titanium.Calendar.RecurrenceRule>;
			setRecurrenceRules (recurrenceRules: Array<Titanium.Calendar.RecurrenceRule>) : void;
			getVisibility () : number;
		}
		export interface RecurrenceRule extends Titanium.Proxy {
			calendarID : string;
			frequency : number;
			interval : number;
			daysOfTheWeek : daysOfTheWeekDictionary;
			daysOfTheMonth : Array<Number>;
			monthsOfTheYear : Array<Number>;
			weeksOfTheYear : Array<Number>;
			daysOfTheYear : Array<Number>;
			setPositions : Array<Number>;
			end : recurrenceEndDictionary;
			getCalendarID () : string;
			getFrequency () : number;
			getInterval () : number;
			getDaysOfTheWeek () : daysOfTheWeekDictionary;
			getDaysOfTheMonth () : Array<Number>;
			getMonthsOfTheYear () : Array<Number>;
			getWeeksOfTheYear () : Array<Number>;
			getDaysOfTheYear () : Array<Number>;
			getSetPositions () : Array<Number>;
			getEnd () : recurrenceEndDictionary;
		}
		export interface Reminder extends Titanium.Proxy {
			id : string;
			method : number;
			minutes : number;
			getId () : string;
			getMethod () : number;
			getMinutes () : number;
		}
	}
	export interface Codec  {
		CHARSET_ASCII : string;
		CHARSET_ISO_LATIN_1 : string;
		CHARSET_UTF8 : string;
		CHARSET_UTF16 : string;
		CHARSET_UTF16BE : string;
		CHARSET_UTF16LE : string;
		TYPE_BYTE : string;
		TYPE_SHORT : string;
		TYPE_INT : string;
		TYPE_FLOAT : string;
		TYPE_LONG : string;
		TYPE_DOUBLE : string;
		BIG_ENDIAN : number;
		LITTLE_ENDIAN : number;
		getNativeByteOrder () : number;
		encodeNumber (options: EncodeNumberDict) : number;
		decodeNumber (options: DecodeNumberDict) : number;
		encodeString (options: Dictionary<EncodeStringDict>) : number;
		decodeString (options: DecodeStringDict) : string;
	}
	export module Contacts {
		export var bubbleParent : boolean;
		export var apiName : string;
		export var lifecycleContainer : any;
		export var CONTACTS_KIND_ORGANIZATION : number;
		export var CONTACTS_KIND_PERSON : number;
		export var CONTACTS_SORT_FIRST_NAME : number;
		export var CONTACTS_SORT_LAST_NAME : number;
		export var AUTHORIZATION_AUTHORIZED : number;
		export var AUTHORIZATION_DENIED : number;
		export var AUTHORIZATION_RESTRICTED : number;
		export var AUTHORIZATION_UNKNOWN : number;
		export var contactsAuthorization : number;
		export function addEventListener (name: string, callback: (...args : any[]) => any) : void;
		export function removeEventListener (name: string, callback: (...args : any[]) => any) : void;
		export function fireEvent (name: string, event: Dictionary<Object>) : void;
		export function applyProperties (props: Dictionary<Object>) : void;
		export function createGroup (parameters?: Dictionary<Titanium.Contacts.Group>) : Titanium.Contacts.Group;
		export function createPerson (parameters?: Dictionary<Titanium.Contacts.Person>) : Titanium.Contacts.Person;
		export function getAllGroups () : Array<Titanium.Contacts.Group>;
		export function getAllPeople (limit: number) : Array<Titanium.Contacts.Person>;
		export function getGroupByID (id: number) : Titanium.Contacts.Group;
		export function getGroupByIdentifier (id: string) : Titanium.Contacts.Group;
		export function getPeopleWithName (name: string) : Array<Titanium.Contacts.Person>;
		export function getPersonByID (id: number) : Titanium.Contacts.Person;
		export function getPersonByIdentifier (id: number) : Titanium.Contacts.Person;
		export function removeGroup (group: Titanium.Contacts.Group) : void;
		export function removePerson (person: Titanium.Contacts.Person) : void;
		export function revert () : void;
		export function save (contacts: Array<Titanium.Contacts.Person>) : void;
		export function showContacts (params: showContactsParams) : void;
		export function hasContactsPermissions () : boolean;
		export function requestContactsPermissions (callback: (...args : any[]) => any) : void;
		export function requestAuthorization (callback: (...args : any[]) => any) : void;
		export function getBubbleParent () : boolean;
		export function setBubbleParent (bubbleParent: boolean) : void;
		export function getApiName () : string;
		export function getLifecycleContainer () : any;
		export function setLifecycleContainer (lifecycleContainer: Titanium.UI.Window) : void;
		export function setLifecycleContainer (lifecycleContainer: Titanium.UI.TabGroup) : void;
		export function getContactsAuthorization () : number;
		export interface Group extends Titanium.Proxy {
			name : string;
			recordId : number;
			identifier : string;
			add (person: Titanium.Contacts.Person) : void;
			members () : Array<Titanium.Contacts.Person>;
			remove (person: Titanium.Contacts.Person) : void;
			sortedMembers (sortBy: number) : Array<Titanium.Contacts.Person>;
			getName () : string;
			setName (name: string) : void;
			getRecordId () : number;
			setRecordId (recordId: number) : void;
			getIdentifier () : string;
		}
		export interface Person extends Titanium.Proxy {
			address : Dictionary<Object>;
			birthday : string;
			alternateBirthday : Dictionary<Object>;
			created : string;
			date : Dictionary<Object>;
			department : string;
			email : Dictionary<Object>;
			firstName : string;
			firstPhonetic : string;
			fullName : string;
			id : number;
			identifier : string;
			image : Titanium.Blob;
			instantMessage : Dictionary<Object>;
			socialProfile : Dictionary<Object>;
			jobTitle : string;
			kind : number;
			lastName : string;
			lastPhonetic : string;
			middleName : string;
			middlePhonetic : string;
			modified : string;
			nickname : string;
			note : string;
			organization : string;
			phone : Dictionary<Object>;
			prefix : string;
			recordId : number;
			relatedNames : Dictionary<Object>;
			suffix : string;
			url : Dictionary<Object>;
			getAddress () : Dictionary<Object>;
			setAddress (address: Dictionary<Object>) : void;
			getBirthday () : string;
			setBirthday (birthday: string) : void;
			getAlternateBirthday () : Dictionary<Object>;
			setAlternateBirthday (alternateBirthday: Dictionary<Object>) : void;
			getCreated () : string;
			getDate () : Dictionary<Object>;
			setDate (date: Dictionary<Object>) : void;
			getDepartment () : string;
			setDepartment (department: string) : void;
			getEmail () : Dictionary<Object>;
			setEmail (email: Dictionary<Object>) : void;
			getFirstName () : string;
			setFirstName (firstName: string) : void;
			getFirstPhonetic () : string;
			setFirstPhonetic (firstPhonetic: string) : void;
			getFullName () : string;
			getId () : number;
			getIdentifier () : string;
			getImage () : Titanium.Blob;
			setImage (image: Titanium.Blob) : void;
			getInstantMessage () : Dictionary<Object>;
			setInstantMessage (instantMessage: Dictionary<Object>) : void;
			getSocialProfile () : Dictionary<Object>;
			setSocialProfile (socialProfile: Dictionary<Object>) : void;
			getJobTitle () : string;
			setJobTitle (jobTitle: string) : void;
			getKind () : number;
			setKind (kind: number) : void;
			getLastName () : string;
			setLastName (lastName: string) : void;
			getLastPhonetic () : string;
			setLastPhonetic (lastPhonetic: string) : void;
			getMiddleName () : string;
			setMiddleName (middleName: string) : void;
			getMiddlePhonetic () : string;
			setMiddlePhonetic (middlePhonetic: string) : void;
			getModified () : string;
			getNickname () : string;
			setNickname (nickname: string) : void;
			getNote () : string;
			setNote (note: string) : void;
			getOrganization () : string;
			setOrganization (organization: string) : void;
			getPhone () : Dictionary<Object>;
			setPhone (phone: Dictionary<Object>) : void;
			getPrefix () : string;
			getRecordId () : number;
			setRecordId (recordId: number) : void;
			getRelatedNames () : Dictionary<Object>;
			setRelatedNames (relatedNames: Dictionary<Object>) : void;
			getSuffix () : string;
			getUrl () : Dictionary<Object>;
			setUrl (url: Dictionary<Object>) : void;
		}
	}
	export module Database {
		export var bubbleParent : boolean;
		export var apiName : string;
		export var lifecycleContainer : any;
		export var FIELD_TYPE_DOUBLE : number;
		export var FIELD_TYPE_FLOAT : number;
		export var FIELD_TYPE_INT : number;
		export var FIELD_TYPE_STRING : number;
		export function addEventListener (name: string, callback: (...args : any[]) => any) : void;
		export function removeEventListener (name: string, callback: (...args : any[]) => any) : void;
		export function fireEvent (name: string, event: Dictionary<Object>) : void;
		export function applyProperties (props: Dictionary<Object>) : void;
		export function install (path: string, dbName: string) : Titanium.Database.DB;
		export function open (dbName: string) : Titanium.Database.DB;
		export function getBubbleParent () : boolean;
		export function setBubbleParent (bubbleParent: boolean) : void;
		export function getApiName () : string;
		export function getLifecycleContainer () : any;
		export function setLifecycleContainer (lifecycleContainer: Titanium.UI.Window) : void;
		export function setLifecycleContainer (lifecycleContainer: Titanium.UI.TabGroup) : void;
		export interface DB extends Titanium.Proxy {
			file : Titanium.Filesystem.File;
			lastInsertRowId : number;
			name : string;
			rowsAffected : number;
			close () : void;
			execute (sql: string, vararg?: string) : Titanium.Database.ResultSet;
			execute (vararg?: Array<String>) : Titanium.Database.ResultSet;
			execute (vararg?: any) : Titanium.Database.ResultSet;
			execute (sql: string, vararg?: Array<Object>) : Titanium.Database.ResultSet;
			remove () : void;
			getFile () : Titanium.Filesystem.File;
			getLastInsertRowId () : number;
			setLastInsertRowId (lastInsertRowId: number) : void;
			getName () : string;
			setName (name: string) : void;
			getRowsAffected () : number;
			setRowsAffected (rowsAffected: number) : void;
		}
		export interface ResultSet extends Titanium.Proxy {
			rowCount : number;
			validRow : boolean;
			close () : void;
			field (index: number, type?: number) : any;
			fieldByName (name: string, type?: number) : any;
			fieldCount () : number;
			fieldName (index: number) : string;
			getFieldName (index: number) : string;
			isValidRow () : boolean;
			next () : boolean;
			getFieldCount () : number;
			getRowCount () : number;
			getValidRow () : boolean;
		}
	}
	export interface Event  {
		source : any;
		type : string;
		bubbles : boolean;
		cancelBubble : boolean;
	}
	export module Facebook {
		export var bubbleParent : boolean;
		export var apiName : string;
		export var lifecycleContainer : any;
		export var BUTTON_STYLE_NORMAL : number;
		export var BUTTON_STYLE_WIDE : number;
		export var accessToken : string;
		export var appid : string;
		export var expirationDate : Date;
		export var forceDialogAuth : boolean;
		export var loggedIn : boolean;
		export var permissions : Array<String>;
		export var uid : string;
		export function addEventListener (name: string, callback: (...args : any[]) => any) : void;
		export function removeEventListener (name: string, callback: (...args : any[]) => any) : void;
		export function fireEvent (name: string, event: Dictionary<Object>) : void;
		export function applyProperties (props: Dictionary<Object>) : void;
		export function authorize () : void;
		export function dialog (action: string, params: any, callback: (...args : any[]) => any) : void;
		export function logout () : void;
		export function request (method: string, params: any, callback: (...args : any[]) => any) : void;
		export function requestWithGraphPath (path: string, params: Dictionary<Object>, httpMethod: string, callback: (...args : any[]) => any) : void;
		export function getBubbleParent () : boolean;
		export function setBubbleParent (bubbleParent: boolean) : void;
		export function getApiName () : string;
		export function getLifecycleContainer () : any;
		export function setLifecycleContainer (lifecycleContainer: Titanium.UI.Window) : void;
		export function setLifecycleContainer (lifecycleContainer: Titanium.UI.TabGroup) : void;
		export function getAccessToken () : string;
		export function setAccessToken (accessToken: string) : void;
		export function getAppid () : string;
		export function setAppid (appid: string) : void;
		export function getExpirationDate () : Date;
		export function setExpirationDate (expirationDate: Date) : void;
		export function getForceDialogAuth () : boolean;
		export function setForceDialogAuth (forceDialogAuth: boolean) : void;
		export function getLoggedIn () : boolean;
		export function setLoggedIn (loggedIn: boolean) : void;
		export function getPermissions () : Array<String>;
		export function setPermissions (permissions: Array<String>) : void;
		export function getUid () : string;
		export function setUid (uid: string) : void;
		export function createLoginButton (parameters?: Dictionary<Titanium.Facebook.LoginButton>) : Titanium.Facebook.LoginButton;
		export interface LoginButton extends Titanium.UI.View {
			style : string;
			getStyle () : string;
			setStyle (style: string) : void;
		}
	}
	export module Filesystem {
		export var bubbleParent : boolean;
		export var apiName : string;
		export var lifecycleContainer : any;
		export var MODE_APPEND : number;
		export var MODE_READ : number;
		export var MODE_WRITE : number;
		export var IOS_FILE_PROTECTION_NONE : string;
		export var IOS_FILE_PROTECTION_COMPLETE : string;
		export var IOS_FILE_PROTECTION_COMPLETE_UNLESS_OPEN : string;
		export var IOS_FILE_PROTECTION_COMPLETE_UNTIL_FIRST_USER_AUTHENTICATION : string;
		export var applicationCacheDirectory : string;
		export var applicationDataDirectory : string;
		export var applicationDirectory : string;
		export var applicationSupportDirectory : string;
		export var externalStorageDirectory : string;
		export var lineEnding : string;
		export var resourcesDirectory : string;
		export var resRawDirectory : string;
		export var separator : string;
		export var tempDirectory : string;
		export function addEventListener (name: string, callback: (...args : any[]) => any) : void;
		export function removeEventListener (name: string, callback: (...args : any[]) => any) : void;
		export function fireEvent (name: string, event: Dictionary<Object>) : void;
		export function applyProperties (props: Dictionary<Object>) : void;
		export function createTempDirectory () : Titanium.Filesystem.File;
		export function createTempFile () : Titanium.Filesystem.File;
		export function getFile (path: string) : Titanium.Filesystem.File;
		export function getAsset (path: string) : Titanium.Blob;
		export function isExternalStoragePresent () : boolean;
		export function hasStoragePermissions () : boolean;
		export function requestStoragePermissions (callback: (...args : any[]) => any) : void;
		export function openStream (mode: number, path: string) : Titanium.Filesystem.FileStream;
		export function directoryForSuite (suiteName: string) : string;
		export function getBubbleParent () : boolean;
		export function setBubbleParent (bubbleParent: boolean) : void;
		export function getApiName () : string;
		export function getLifecycleContainer () : any;
		export function setLifecycleContainer (lifecycleContainer: Titanium.UI.Window) : void;
		export function setLifecycleContainer (lifecycleContainer: Titanium.UI.TabGroup) : void;
		export function getApplicationCacheDirectory () : string;
		export function getApplicationDataDirectory () : string;
		export function getApplicationDirectory () : string;
		export function getApplicationSupportDirectory () : string;
		export function getExternalStorageDirectory () : string;
		export function getLineEnding () : string;
		export function getResourcesDirectory () : string;
		export function getResRawDirectory () : string;
		export function getSeparator () : string;
		export function getTempDirectory () : string;
		export interface File extends Titanium.Proxy {
			executable : boolean;
			hidden : boolean;
			name : string;
			nativePath : string;
			parent : Titanium.Filesystem.File;
			readonly : boolean;
			size : number;
			remoteBackup : boolean;
			symbolicLink : boolean;
			writable : boolean;
			writeable : boolean;
			append (data: string) : boolean;
			append (data: Titanium.Blob) : boolean;
			append (data: Titanium.Filesystem.File) : boolean;
			copy (destinationPath: string) : boolean;
			createDirectory () : boolean;
			createFile () : boolean;
			createTimestamp () : number;
			deleteDirectory (recursive?: boolean) : boolean;
			deleteFile () : boolean;
			exists () : boolean;
			extension () : string;
			getDirectoryListing () : Array<String>;
			getParent () : any;
			getProtectionKey () : string;
			isDirectory () : boolean;
			isFile () : boolean;
			modificationTimestamp () : number;
			move (newpath: string) : boolean;
			open (mode: number) : Titanium.Filesystem.FileStream;
			read () : Titanium.Blob;
			rename (newname: string) : boolean;
			resolve () : string;
			setProtectionKey (fileProtectionType: string) : boolean;
			spaceAvailable () : number;
			write (data: string, append?: boolean) : boolean;
			write (data: Titanium.Filesystem.File, append?: boolean) : boolean;
			write (data: Titanium.Blob, append?: boolean) : boolean;
			getExecutable () : boolean;
			getHidden () : boolean;
			setHidden (hidden: boolean) : void;
			getName () : string;
			getNativePath () : string;
			getParent () : Titanium.Filesystem.File;
			getReadonly () : boolean;
			getSize () : number;
			getRemoteBackup () : boolean;
			setRemoteBackup (remoteBackup: boolean) : void;
			getSymbolicLink () : boolean;
			getWritable () : boolean;
			getWriteable () : boolean;
		}
		export enum FileStream {

		}
	}
	export module Geolocation {
		export var bubbleParent : boolean;
		export var apiName : string;
		export var lifecycleContainer : any;
		export var ACCURACY_BEST : number;
		export var ACCURACY_HUNDRED_METERS : number;
		export var ACCURACY_KILOMETER : number;
		export var ACCURACY_NEAREST_TEN_METERS : number;
		export var ACCURACY_THREE_KILOMETERS : number;
		export var ACCURACY_HIGH : number;
		export var ACCURACY_BEST_FOR_NAVIGATION : number;
		export var ACCURACY_LOW : number;
		export var AUTHORIZATION_AUTHORIZED : number;
		export var AUTHORIZATION_DENIED : number;
		export var AUTHORIZATION_RESTRICTED : number;
		export var AUTHORIZATION_UNKNOWN : number;
		export var AUTHORIZATION_ALWAYS : number;
		export var AUTHORIZATION_WHEN_IN_USE : number;
		export var ERROR_DENIED : number;
		export var ERROR_HEADING_FAILURE : number;
		export var ERROR_LOCATION_UNKNOWN : number;
		export var ERROR_NETWORK : number;
		export var ERROR_REGION_MONITORING_DELAYED : number;
		export var ERROR_REGION_MONITORING_DENIED : number;
		export var ERROR_REGION_MONITORING_FAILURE : number;
		export var ERROR_TIMEOUT : number;
		export var PROVIDER_GPS : string;
		export var PROVIDER_NETWORK : string;
		export var PROVIDER_PASSIVE : string;
		export var ACTIVITYTYPE_OTHER : string;
		export var ACTIVITYTYPE_AUTOMOTIVE_NAVIGATION : string;
		export var ACTIVITYTYPE_FITNESS : string;
		export var ACTIVITYTYPE_OTHER_NAVIGATION : string;
		export var accuracy : number;
		export var distanceFilter : number;
		export var frequency : number;
		export var hasCompass : boolean;
		export var headingFilter : number;
		export var locationServicesAuthorization : number;
		export var locationServicesEnabled : boolean;
		export var preferredProvider : string;
		export var purpose : string;
		export var showCalibration : boolean;
		export var trackSignificantLocationChange : boolean;
		export var allowsBackgroundLocationUpdates : boolean;
		export var activityType : number;
		export var pauseLocationUpdateAutomatically : boolean;
		export var lastGeolocation : string;
		export function addEventListener (name: string, callback: (...args : any[]) => any) : void;
		export function removeEventListener (name: string, callback: (...args : any[]) => any) : void;
		export function fireEvent (name: string, event: Dictionary<Object>) : void;
		export function applyProperties (props: Dictionary<Object>) : void;
		export function forwardGeocoder (address: string, callback: (...args : any[]) => any) : void;
		export function getCurrentHeading (callback: (...args : any[]) => any) : void;
		export function getCurrentPosition (callback: (...args : any[]) => any) : void;
		export function hasLocationPermissions (authorizationType: number) : boolean;
		export function requestLocationPermissions (authorizationType: number, callback: (...args : any[]) => any) : void;
		export function reverseGeocoder (latitude: number, longitude: number, callback: (...args : any[]) => any) : void;
		export function getBubbleParent () : boolean;
		export function setBubbleParent (bubbleParent: boolean) : void;
		export function getApiName () : string;
		export function getLifecycleContainer () : any;
		export function setLifecycleContainer (lifecycleContainer: Titanium.UI.Window) : void;
		export function setLifecycleContainer (lifecycleContainer: Titanium.UI.TabGroup) : void;
		export function getAccuracy () : number;
		export function setAccuracy (accuracy: number) : void;
		export function getDistanceFilter () : number;
		export function setDistanceFilter (distanceFilter: number) : void;
		export function getFrequency () : number;
		export function setFrequency (frequency: number) : void;
		export function getHasCompass () : boolean;
		export function getHeadingFilter () : number;
		export function setHeadingFilter (headingFilter: number) : void;
		export function getLocationServicesAuthorization () : number;
		export function setLocationServicesAuthorization (locationServicesAuthorization: number) : void;
		export function getLocationServicesEnabled () : boolean;
		export function getPreferredProvider () : string;
		export function setPreferredProvider (preferredProvider: string) : void;
		export function getPurpose () : string;
		export function setPurpose (purpose: string) : void;
		export function getShowCalibration () : boolean;
		export function setShowCalibration (showCalibration: boolean) : void;
		export function getTrackSignificantLocationChange () : boolean;
		export function setTrackSignificantLocationChange (trackSignificantLocationChange: boolean) : void;
		export function getAllowsBackgroundLocationUpdates () : boolean;
		export function setAllowsBackgroundLocationUpdates (allowsBackgroundLocationUpdates: boolean) : void;
		export function getActivityType () : number;
		export function setActivityType (activityType: number) : void;
		export function getPauseLocationUpdateAutomatically () : boolean;
		export function setPauseLocationUpdateAutomatically (pauseLocationUpdateAutomatically: boolean) : void;
		export function getLastGeolocation () : string;
		export module Android {
			export var bubbleParent : boolean;
			export var apiName : string;
			export var lifecycleContainer : any;
			export var manualMode : boolean;
			export function addEventListener (name: string, callback: (...args : any[]) => any) : void;
			export function removeEventListener (name: string, callback: (...args : any[]) => any) : void;
			export function fireEvent (name: string, event: Dictionary<Object>) : void;
			export function applyProperties (props: Dictionary<Object>) : void;
			export function addLocationProvider (provider: Titanium.Geolocation.Android.LocationProvider) : void;
			export function removeLocationProvider (provider: Titanium.Geolocation.Android.LocationProvider) : void;
			export function addLocationRule (rule: Titanium.Geolocation.Android.LocationRule) : void;
			export function removeLocationRule (rule: Titanium.Geolocation.Android.LocationRule) : void;
			export function getBubbleParent () : boolean;
			export function setBubbleParent (bubbleParent: boolean) : void;
			export function getApiName () : string;
			export function getLifecycleContainer () : any;
			export function setLifecycleContainer (lifecycleContainer: Titanium.UI.Window) : void;
			export function setLifecycleContainer (lifecycleContainer: Titanium.UI.TabGroup) : void;
			export function getManualMode () : boolean;
			export function setManualMode (manualMode: boolean) : void;
			export function createLocationProvider (parameters?: Dictionary<Titanium.Geolocation.Android.LocationProvider>) : Titanium.Geolocation.Android.LocationProvider;
			export function createLocationRule (parameters?: Dictionary<Titanium.Geolocation.Android.LocationRule>) : Titanium.Geolocation.Android.LocationRule;
			export interface LocationProvider extends Titanium.Proxy {
				name : string;
				minUpdateTime : number;
				minUpdateDistance : number;
				getName () : string;
				setName (name: string) : void;
				getMinUpdateTime () : number;
				setMinUpdateTime (minUpdateTime: number) : void;
				getMinUpdateDistance () : number;
				setMinUpdateDistance (minUpdateDistance: number) : void;
			}
			export interface LocationRule extends Titanium.Proxy {
				name : string;
				accuracy : number;
				minAge : number;
				maxAge : number;
				getName () : string;
				setName (name: string) : void;
				getAccuracy () : number;
				setAccuracy (accuracy: number) : void;
				getMinAge () : number;
				setMinAge (minAge: number) : void;
				getMaxAge () : number;
				setMaxAge (maxAge: number) : void;
			}
		}
		export interface MobileWeb  {
			locationTimeout : number;
			maximumLocationAge : number;
			maximumHeadingAge : number;
			forwardGeocoderTimeout : number;
			reverseGeocoderTimeout : number;
			getLocationTimeout () : number;
			setLocationTimeout (locationTimeout: number) : void;
			getMaximumLocationAge () : number;
			setMaximumLocationAge (maximumLocationAge: number) : void;
			getMaximumHeadingAge () : number;
			setMaximumHeadingAge (maximumHeadingAge: number) : void;
			getForwardGeocoderTimeout () : number;
			setForwardGeocoderTimeout (forwardGeocoderTimeout: number) : void;
			getReverseGeocoderTimeout () : number;
			setReverseGeocoderTimeout (reverseGeocoderTimeout: number) : void;
		}
	}
	export interface Gesture  {
		portrait : boolean;
		landscape : boolean;
		orientation : number;
		getLandscape () : boolean;
		getPortrait () : boolean;
		isLandscape () : boolean;
		isPortrait () : boolean;
		getOrientation () : number;
	}
	export interface Locale  {
		currentCountry : string;
		currentLanguage : string;
		currentLocale : string;
		formatTelephoneNumber (number: string) : string;
		getCurrencyCode (locale: string) : string;
		getCurrencySymbol (currencyCode: string) : string;
		getLocaleCurrencySymbol (locale: string) : string;
		getString (key: string, hint?: string) : string;
		getCurrentCountry () : string;
		getCurrentLanguage () : string;
		getCurrentLocale () : string;
	}
	export module Map {
		export var bubbleParent : boolean;
		export var apiName : string;
		export var lifecycleContainer : any;
		export var ANNOTATION_DRAG_STATE_NONE : number;
		export var ANNOTATION_DRAG_STATE_START : number;
		export var ANNOTATION_DRAG_STATE_DRAG : number;
		export var ANNOTATION_DRAG_STATE_CANCEL : number;
		export var ANNOTATION_DRAG_STATE_END : number;
		export var ANNOTATION_GREEN : number;
		export var ANNOTATION_PURPLE : number;
		export var ANNOTATION_RED : number;
		export var HYBRID_TYPE : number;
		export var SATELLITE_TYPE : number;
		export var STANDARD_TYPE : number;
		export var TERRAIN_TYPE : number;
		export function addEventListener (name: string, callback: (...args : any[]) => any) : void;
		export function removeEventListener (name: string, callback: (...args : any[]) => any) : void;
		export function fireEvent (name: string, event: Dictionary<Object>) : void;
		export function applyProperties (props: Dictionary<Object>) : void;
		export function createAnnotation (parameters?: Dictionary<Titanium.Map.Annotation>) : Titanium.Map.Annotation;
		export function getBubbleParent () : boolean;
		export function setBubbleParent (bubbleParent: boolean) : void;
		export function getApiName () : string;
		export function getLifecycleContainer () : any;
		export function setLifecycleContainer (lifecycleContainer: Titanium.UI.Window) : void;
		export function setLifecycleContainer (lifecycleContainer: Titanium.UI.TabGroup) : void;
		export function createView (parameters?: Dictionary<Titanium.Map.View>) : Titanium.Map.View;
		export interface Annotation extends Titanium.Proxy {
			animate : boolean;
			canShowCallout : boolean;
			centerOffset : Point;
			customView : Titanium.UI.View;
			draggable : boolean;
			image : any;
			latitude : number;
			longitude : number;
			leftButton : any;
			leftView : Titanium.UI.View;
			pinImage : string;
			pincolor : number;
			rightButton : any;
			rightView : Titanium.UI.View;
			subtitle : string;
			subtitleid : string;
			title : string;
			titleid : string;
			getAnimate () : boolean;
			setAnimate (animate: boolean) : void;
			getCanShowCallout () : boolean;
			setCanShowCallout (canShowCallout: boolean) : void;
			getCenterOffset () : Point;
			setCenterOffset (centerOffset: Point) : void;
			getCustomView () : Titanium.UI.View;
			setCustomView (customView: Titanium.UI.View) : void;
			getDraggable () : boolean;
			setDraggable (draggable: boolean) : void;
			getImage () : any;
			setImage (image: string) : void;
			setImage (image: Titanium.Blob) : void;
			getLatitude () : number;
			setLatitude (latitude: number) : void;
			getLongitude () : number;
			setLongitude (longitude: number) : void;
			getLeftButton () : any;
			setLeftButton (leftButton: number) : void;
			setLeftButton (leftButton: string) : void;
			getLeftView () : Titanium.UI.View;
			setLeftView (leftView: Titanium.UI.View) : void;
			getPinImage () : string;
			setPinImage (pinImage: string) : void;
			getPincolor () : number;
			setPincolor (pincolor: number) : void;
			getRightButton () : any;
			setRightButton (rightButton: number) : void;
			setRightButton (rightButton: string) : void;
			getRightView () : Titanium.UI.View;
			setRightView (rightView: Titanium.UI.View) : void;
			getSubtitle () : string;
			setSubtitle (subtitle: string) : void;
			getSubtitleid () : string;
			setSubtitleid (subtitleid: string) : void;
			getTitle () : string;
			setTitle (title: string) : void;
			getTitleid () : string;
			setTitleid (titleid: string) : void;
		}
		export interface View extends Titanium.UI.View {
			animated : boolean;
			annotations : Array<Titanium.Map.Annotation>;
			hideAnnotationWhenTouchMap : boolean;
			mapType : number;
			region : MapRegionType;
			regionFit : boolean;
			userLocation : boolean;
			latitudeDelta : number;
			longitudeDelta : number;
			addAnnotation (annotation: Dictionary<Titanium.Map.Annotation>) : void;
			addAnnotation (annotation: Titanium.Map.Annotation) : void;
			addAnnotations (annotations: Array<Titanium.Map.Annotation>) : void;
			addAnnotations (annotations: Array<Dictionary<Titanium.Map.Annotation>>) : void;
			addRoute (route: MapRouteType) : void;
			deselectAnnotation (annotation: string) : void;
			deselectAnnotation (annotation: Titanium.Map.Annotation) : void;
			removeAllAnnotations () : void;
			removeAnnotation (annotation: string) : void;
			removeAnnotation (annotation: Titanium.Map.Annotation) : void;
			removeAnnotations (annotations: Array<String>) : void;
			removeAnnotations (annotations: Array<Titanium.Map.Annotation>) : void;
			removeRoute (route: MapRouteType) : void;
			selectAnnotation (annotation: string) : void;
			selectAnnotation (annotation: Titanium.Map.Annotation) : void;
			setLocation (location: MapLocationType) : void;
			setMapType (mapType: number) : void;
			zoom (level: number) : void;
			getAnimate () : boolean;
			setAnimate (animate: boolean) : void;
			getAnimated () : boolean;
			setAnimated (animated: boolean) : void;
			getAnnotations () : Array<Titanium.Map.Annotation>;
			setAnnotations (annotations: Array<Titanium.Map.Annotation>) : void;
			getHideAnnotationWhenTouchMap () : boolean;
			setHideAnnotationWhenTouchMap (hideAnnotationWhenTouchMap: boolean) : void;
			getMapType () : number;
			setMapType (mapType: number) : void;
			getRegion () : MapRegionType;
			setRegion (region: MapRegionType) : void;
			getRegionFit () : boolean;
			setRegionFit (regionFit: boolean) : void;
			getUserLocation () : boolean;
			setUserLocation (userLocation: boolean) : void;
			getLatitudeDelta () : number;
			getLongitudeDelta () : number;
		}
	}
	export module Media {
		export var bubbleParent : boolean;
		export var apiName : string;
		export var lifecycleContainer : any;
		export var AUDIO_FILEFORMAT_3GP2 : number;
		export var AUDIO_FILEFORMAT_3GPP : number;
		export var AUDIO_FILEFORMAT_AIFF : number;
		export var AUDIO_FILEFORMAT_AMR : number;
		export var AUDIO_FILEFORMAT_CAF : number;
		export var AUDIO_FILEFORMAT_MP3 : number;
		export var AUDIO_FILEFORMAT_MP4 : number;
		export var AUDIO_FILEFORMAT_MP4A : number;
		export var AUDIO_FILEFORMAT_WAVE : number;
		export var AUDIO_FORMAT_AAC : number;
		export var AUDIO_FORMAT_ALAW : number;
		export var AUDIO_FORMAT_APPLE_LOSSLESS : number;
		export var AUDIO_FORMAT_ILBC : number;
		export var AUDIO_FORMAT_IMA4 : number;
		export var AUDIO_FORMAT_LINEAR_PCM : number;
		export var AUDIO_FORMAT_ULAW : number;
		export var AUDIO_HEADPHONES : number;
		export var AUDIO_HEADPHONES_AND_MIC : number;
		export var AUDIO_HEADSET_INOUT : number;
		export var AUDIO_LINEOUT : number;
		export var AUDIO_MICROPHONE : number;
		export var AUDIO_MUTED : number;
		export var AUDIO_RECEIVER_AND_MIC : number;
		export var AUDIO_SESSION_CATEGORY_AMBIENT : string;
		export var AUDIO_SESSION_CATEGORY_PLAYBACK : string;
		export var AUDIO_SESSION_CATEGORY_PLAY_AND_RECORD : string;
		export var AUDIO_SESSION_CATEGORY_RECORD : string;
		export var AUDIO_SESSION_CATEGORY_SOLO_AMBIENT : string;
		export var AUDIO_SESSION_MODE_AMBIENT : number;
		export var AUDIO_SESSION_MODE_PLAYBACK : number;
		export var AUDIO_SESSION_MODE_PLAY_AND_RECORD : number;
		export var AUDIO_SESSION_MODE_RECORD : number;
		export var AUDIO_SESSION_MODE_SOLO_AMBIENT : number;
		export var AUDIO_SESSION_OVERRIDE_ROUTE_NONE : number;
		export var AUDIO_SESSION_OVERRIDE_ROUTE_SPEAKER : number;
		export var AUDIO_SESSION_PORT_LINEIN : string;
		export var AUDIO_SESSION_PORT_BUILTINMIC : string;
		export var AUDIO_SESSION_PORT_HEADSETMIC : string;
		export var AUDIO_SESSION_PORT_LINEOUT : string;
		export var AUDIO_SESSION_PORT_HEADPHONES : string;
		export var AUDIO_SESSION_PORT_BLUETOOTHA2DP : string;
		export var AUDIO_SESSION_PORT_BUILTINRECEIVER : string;
		export var AUDIO_SESSION_PORT_BUILTINSPEAKER : string;
		export var AUDIO_SESSION_PORT_HDMI : string;
		export var AUDIO_SESSION_PORT_AIRPLAY : string;
		export var AUDIO_SESSION_PORT_BLUETOOTHHFP : string;
		export var AUDIO_SESSION_PORT_USBAUDIO : string;
		export var AUDIO_SESSION_PORT_BLUETOOTHLE : string;
		export var AUDIO_SESSION_PORT_CARAUDIO : string;
		export var AUDIO_SPEAKER : number;
		export var AUDIO_UNAVAILABLE : number;
		export var AUDIO_UNKNOWN : number;
		export var CAMERA_FLASH_AUTO : number;
		export var CAMERA_FLASH_OFF : number;
		export var CAMERA_FLASH_ON : number;
		export var CAMERA_FRONT : number;
		export var CAMERA_REAR : number;
		export var CAMERA_AUTHORIZATION_AUTHORIZED : number;
		export var CAMERA_AUTHORIZATION_DENIED : number;
		export var CAMERA_AUTHORIZATION_RESTRICTED : number;
		export var CAMERA_AUTHORIZATION_NOT_DETERMINED : number;
		export var CAMERA_AUTHORIZATION_UNKNOWN : number;
		export var DEVICE_BUSY : number;
		export var MEDIA_TYPE_PHOTO : string;
		export var MEDIA_TYPE_LIVEPHOTO : string;
		export var MEDIA_TYPE_VIDEO : string;
		export var MUSIC_MEDIA_TYPE_ALL : number;
		export var MUSIC_MEDIA_TYPE_ANY_AUDIO : number;
		export var MUSIC_MEDIA_TYPE_AUDIOBOOK : number;
		export var MUSIC_MEDIA_TYPE_MUSIC : number;
		export var MUSIC_MEDIA_TYPE_PODCAST : number;
		export var MUSIC_MEDIA_GROUP_TITLE : number;
		export var MUSIC_MEDIA_GROUP_ALBUM : number;
		export var MUSIC_MEDIA_GROUP_ARTIST : number;
		export var MUSIC_MEDIA_GROUP_ALBUM_ARTIST : number;
		export var MUSIC_MEDIA_GROUP_COMPOSER : number;
		export var MUSIC_MEDIA_GROUP_GENRE : number;
		export var MUSIC_MEDIA_GROUP_PLAYLIST : number;
		export var MUSIC_MEDIA_GROUP_PODCAST_TITLE : number;
		export var MUSIC_PLAYER_REPEAT_ALL : number;
		export var MUSIC_PLAYER_REPEAT_DEFAULT : number;
		export var MUSIC_PLAYER_REPEAT_NONE : number;
		export var MUSIC_PLAYER_REPEAT_ONE : number;
		export var MUSIC_PLAYER_SHUFFLE_ALBUMS : number;
		export var MUSIC_PLAYER_SHUFFLE_DEFAULT : number;
		export var MUSIC_PLAYER_SHUFFLE_NONE : number;
		export var MUSIC_PLAYER_SHUFFLE_SONGS : number;
		export var MUSIC_PLAYER_STATE_INTERRUPTED : number;
		export var MUSIC_PLAYER_STATE_PAUSED : number;
		export var MUSIC_PLAYER_STATE_PLAYING : number;
		export var MUSIC_PLAYER_STATE_SEEK_BACKWARD : number;
		export var MUSIC_PLAYER_STATE_SEEK_FORWARD : number;
		export var MUSIC_PLAYER_STATE_STOPPED : number;
		export var NO_CAMERA : number;
		export var NO_VIDEO : number;
		export var QUALITY_HIGH : number;
		export var QUALITY_LOW : number;
		export var QUALITY_MEDIUM : number;
		export var UNKNOWN_ERROR : number;
		export var VIDEO_CONTROL_DEFAULT : number;
		export var VIDEO_CONTROL_EMBEDDED : number;
		export var VIDEO_CONTROL_FULLSCREEN : number;
		export var VIDEO_CONTROL_HIDDEN : number;
		export var VIDEO_CONTROL_NONE : number;
		export var VIDEO_CONTROL_VOLUME_ONLY : number;
		export var VIDEO_FINISH_REASON_PLAYBACK_ENDED : number;
		export var VIDEO_FINISH_REASON_PLAYBACK_ERROR : number;
		export var VIDEO_FINISH_REASON_USER_EXITED : number;
		export var VIDEO_LOAD_STATE_PLAYABLE : number;
		export var VIDEO_LOAD_STATE_PLAYTHROUGH_OK : number;
		export var VIDEO_LOAD_STATE_STALLED : number;
		export var VIDEO_LOAD_STATE_UNKNOWN : number;
		export var VIDEO_MEDIA_TYPE_AUDIO : number;
		export var VIDEO_MEDIA_TYPE_NONE : number;
		export var VIDEO_MEDIA_TYPE_VIDEO : number;
		export var VIDEO_PLAYBACK_STATE_INTERRUPTED : number;
		export var VIDEO_PLAYBACK_STATE_PAUSED : number;
		export var VIDEO_PLAYBACK_STATE_PLAYING : number;
		export var VIDEO_PLAYBACK_STATE_SEEKING_BACKWARD : number;
		export var VIDEO_PLAYBACK_STATE_SEEKING_FORWARD : number;
		export var VIDEO_PLAYBACK_STATE_STOPPED : number;
		export var VIDEO_REPEAT_MODE_NONE : number;
		export var VIDEO_REPEAT_MODE_ONE : number;
		export var VIDEO_SCALING_ASPECT_FILL : number;
		export var VIDEO_SCALING_ASPECT_FIT : number;
		export var VIDEO_SCALING_MODE_FILL : number;
		export var VIDEO_SCALING_NONE : number;
		export var VIDEO_SOURCE_TYPE_FILE : number;
		export var VIDEO_SOURCE_TYPE_STREAMING : number;
		export var VIDEO_SOURCE_TYPE_UNKNOWN : number;
		export var VIDEO_TIME_OPTION_EXACT : number;
		export var VIDEO_TIME_OPTION_NEAREST_KEYFRAME : number;
		export var VIDEO_TIME_OPTION_CLOSEST_SYNC : number;
		export var VIDEO_TIME_OPTION_NEXT_SYNC : number;
		export var VIDEO_TIME_OPTION_PREVIOUS_SYNC : number;
		export var appMusicPlayer : Titanium.Media.MusicPlayer;
		export var audioLineType : number;
		export var audioPlaying : boolean;
		export var audioSessionCategory : number;
		export var audioSessionMode : number;
		export var availableCameras : Array<Number>;
		export var availableCameraMediaTypes : Array<Object>;
		export var availablePhotoGalleryMediaTypes : Array<Object>;
		export var availablePhotoMediaTypes : Array<Object>;
		export var averageMicrophonePower : number;
		export var cameraFlashMode : number;
		export var canRecord : boolean;
		export var currentRoute : RouteDescription;
		export var isCameraSupported : boolean;
		export var cameraAuthorizationStatus : number;
		export var cameraAuthorization : number;
		export var peakMicrophonePower : number;
		export var systemMusicPlayer : Titanium.Media.MusicPlayer;
		export var volume : number;
		export function addEventListener (name: string, callback: (...args : any[]) => any) : void;
		export function removeEventListener (name: string, callback: (...args : any[]) => any) : void;
		export function fireEvent (name: string, event: Dictionary<Object>) : void;
		export function applyProperties (props: Dictionary<Object>) : void;
		export function beep () : void;
		export function hideCamera () : void;
		export function hideMusicLibrary () : void;
		export function isMediaTypeSupported (source: string, type: string) : boolean;
		export function openMusicLibrary (options: MusicLibraryOptionsType) : void;
		export function openPhotoGallery (options: PhotoGalleryOptionsType) : void;
		export function previewImage (options: Dictionary<PreviewImageOptions>) : void;
		export function saveToPhotoGallery (media: Titanium.Blob, callbacks: any) : void;
		export function saveToPhotoGallery (media: Titanium.Filesystem.File, callbacks: any) : void;
		export function setOverrideAudioRoute (route: number) : void;
		export function showCamera (options: CameraOptionsType) : void;
		export function queryMusicLibrary (query: MediaQueryType) : Array<Titanium.Media.Item>;
		export function startMicrophoneMonitor () : void;
		export function stopMicrophoneMonitor () : void;
		export function takePicture () : void;
		export function startVideoCapture () : void;
		export function stopVideoCapture () : void;
		export function switchCamera (camera: number) : void;
		export function hasCameraPermissions () : boolean;
		export function requestCameraPermissions (callback: (...args : any[]) => any) : void;
		export function requestCameraAccess (callback: (...args : any[]) => any) : void;
		export function takeScreenshot (callback: (...args : any[]) => any) : void;
		export function vibrate (pattern?: Array<Number>) : void;
		export function requestAuthorization (callback: (...args : any[]) => any) : void;
		export function createAudioPlayer (parameters?: Dictionary<Titanium.Media.AudioPlayer>) : Titanium.Media.AudioPlayer;
		export function createAudioRecorder (parameters?: Dictionary<Titanium.Media.AudioRecorder>) : Titanium.Media.AudioRecorder;
		export function getBubbleParent () : boolean;
		export function setBubbleParent (bubbleParent: boolean) : void;
		export function getApiName () : string;
		export function getLifecycleContainer () : any;
		export function setLifecycleContainer (lifecycleContainer: Titanium.UI.Window) : void;
		export function setLifecycleContainer (lifecycleContainer: Titanium.UI.TabGroup) : void;
		export function getAppMusicPlayer () : Titanium.Media.MusicPlayer;
		export function getAudioLineType () : number;
		export function getAudioPlaying () : boolean;
		export function getAudioSessionCategory () : number;
		export function setAudioSessionCategory (audioSessionCategory: number) : void;
		export function getAudioSessionMode () : number;
		export function setAudioSessionMode (audioSessionMode: number) : void;
		export function getAvailableCameras () : Array<Number>;
		export function getAvailableCameraMediaTypes () : Array<Object>;
		export function setAvailableCameraMediaTypes (availableCameraMediaTypes: Array<Object>) : void;
		export function getAvailablePhotoGalleryMediaTypes () : Array<Object>;
		export function setAvailablePhotoGalleryMediaTypes (availablePhotoGalleryMediaTypes: Array<Object>) : void;
		export function getAvailablePhotoMediaTypes () : Array<Object>;
		export function setAvailablePhotoMediaTypes (availablePhotoMediaTypes: Array<Object>) : void;
		export function getAverageMicrophonePower () : number;
		export function setAverageMicrophonePower (averageMicrophonePower: number) : void;
		export function getCameraFlashMode () : number;
		export function setCameraFlashMode (cameraFlashMode: number) : void;
		export function getCanRecord () : boolean;
		export function getCurrentRoute () : RouteDescription;
		export function getIsCameraSupported () : boolean;
		export function getCameraAuthorizationStatus () : number;
		export function getCameraAuthorization () : number;
		export function getPeakMicrophonePower () : number;
		export function getSystemMusicPlayer () : Titanium.Media.MusicPlayer;
		export function getVolume () : number;
		export function createSound (parameters?: Dictionary<Titanium.Media.Sound>) : Titanium.Media.Sound;
		export function createVideoPlayer (parameters?: Dictionary<Titanium.Media.VideoPlayer>) : Titanium.Media.VideoPlayer;
		export interface Android  {
			scanMediaFiles (paths: Array<String>, mimeTypes: Array<String>, callback: (...args : any[]) => any) : void;
			setSystemWallpaper (image: Titanium.Blob, scale: boolean) : void;
		}
		export interface AudioPlayer extends Titanium.Proxy {
			STATE_BUFFERING : number;
			STATE_INITIALIZED : number;
			STATE_PAUSED : number;
			STATE_PLAYING : number;
			STATE_STARTING : number;
			STATE_STOPPED : number;
			STATE_STOPPING : number;
			STATE_WAITING_FOR_DATA : number;
			STATE_WAITING_FOR_QUEUE : number;
			allowBackground : boolean;
			bitRate : number;
			duration : number;
			idle : boolean;
			paused : boolean;
			playing : boolean;
			progress : number;
			state : number;
			url : string;
			volume : number;
			waiting : boolean;
			bufferSize : number;
			time : number;
			getPaused () : boolean;
			isPaused () : boolean;
			getPlaying () : boolean;
			isPlaying () : boolean;
			pause () : void;
			play () : void;
			setPaused (paused: boolean) : void;
			release () : void;
			start () : void;
			stateDescription (state: number) : string;
			stop () : void;
			getAllowBackground () : boolean;
			setAllowBackground (allowBackground: boolean) : void;
			getBitRate () : number;
			setBitRate (bitRate: number) : void;
			getDuration () : number;
			getIdle () : boolean;
			getPaused () : boolean;
			setPaused (paused: boolean) : void;
			getPlaying () : boolean;
			getProgress () : number;
			getState () : number;
			getUrl () : string;
			setUrl (url: string) : void;
			getVolume () : number;
			setVolume (volume: number) : void;
			getWaiting () : boolean;
			getBufferSize () : number;
			setBufferSize (bufferSize: number) : void;
			getTime () : number;
			setTime (time: number) : void;
		}
		export interface AudioRecorder extends Titanium.Proxy {
			compression : number;
			format : number;
			paused : boolean;
			recording : boolean;
			stopped : boolean;
			pause () : void;
			resume () : void;
			start () : void;
			stop () : Titanium.Filesystem.File;
			getCompression () : number;
			setCompression (compression: number) : void;
			getFormat () : number;
			setFormat (format: number) : void;
			getPaused () : boolean;
			getRecording () : boolean;
			getStopped () : boolean;
		}
		export interface Item extends Titanium.Proxy {
			albumArtist : string;
			albumTitle : string;
			albumTrackCount : number;
			albumTrackNumber : number;
			artist : string;
			artwork : Titanium.Blob;
			composer : string;
			discCount : number;
			discNumber : number;
			genre : string;
			isCompilation : boolean;
			lyrics : string;
			mediaType : number;
			playCount : number;
			playbackDuration : number;
			podcastTitle : string;
			rating : number;
			skipCount : number;
			title : string;
			getAlbumArtist () : string;
			getAlbumTitle () : string;
			getAlbumTrackCount () : number;
			getAlbumTrackNumber () : number;
			getArtist () : string;
			getArtwork () : Titanium.Blob;
			getComposer () : string;
			getDiscCount () : number;
			getDiscNumber () : number;
			getGenre () : string;
			getIsCompilation () : boolean;
			getLyrics () : string;
			getMediaType () : number;
			getPlayCount () : number;
			getPlaybackDuration () : number;
			getPodcastTitle () : string;
			getRating () : number;
			getSkipCount () : number;
			getTitle () : string;
		}
		export interface MusicPlayer extends Titanium.Proxy {
			currentPlaybackTime : number;
			nowPlaying : Titanium.Media.Item;
			playbackState : number;
			repeatMode : number;
			shuffleMode : number;
			volume : number;
			pause () : void;
			play () : void;
			seekBackward () : void;
			seekForward () : void;
			setQueue (queue: Titanium.Media.Item) : void;
			setQueue (queue: Array<Titanium.Media.Item>) : void;
			setQueue (queue: PlayerQueue) : void;
			skipToBeginning () : void;
			skipToNext () : void;
			skipToPrevious () : void;
			stop () : void;
			stopSeeking () : void;
			getCurrentPlaybackTime () : number;
			setCurrentPlaybackTime (currentPlaybackTime: number) : void;
			getNowPlaying () : Titanium.Media.Item;
			getPlaybackState () : number;
			getRepeatMode () : number;
			setRepeatMode (repeatMode: number) : void;
			getShuffleMode () : number;
			setShuffleMode (shuffleMode: number) : void;
			getVolume () : number;
			setVolume (volume: number) : void;
		}
		export interface Sound extends Titanium.Proxy {
			STATE_BUFFERING : number;
			STATE_INITIALIZED : number;
			STATE_PAUSED : number;
			STATE_PLAYING : number;
			STATE_STARTING : number;
			STATE_STOPPED : number;
			STATE_STOPPING : number;
			STATE_WAITING_FOR_DATA : number;
			STATE_WAITING_FOR_QUEUE : number;
			allowBackground : boolean;
			duration : number;
			looping : boolean;
			paused : boolean;
			playing : boolean;
			time : number;
			url : string;
			volume : number;
			isLooping () : boolean;
			isPaused () : boolean;
			isPlaying () : boolean;
			pause () : void;
			play () : void;
			release () : void;
			reset () : void;
			setLooping (looping: boolean) : void;
			setPaused (paused: boolean) : void;
			stop () : void;
			getDuration () : number;
			getTime () : number;
			setTime (time: number) : void;
			getUrl () : string;
			setUrl (url: string) : void;
			getVolume () : number;
			setVolume (volume: number) : void;
		}
		export interface VideoPlayer extends Titanium.UI.View {
			allowsAirPlay : boolean;
			autoplay : boolean;
			contentURL : string;
			currentPlaybackTime : number;
			duration : number;
			endPlaybackTime : number;
			fullscreen : boolean;
			initialPlaybackTime : number;
			loadState : number;
			media : any;
			mediaControlStyle : number;
			mediaTypes : number;
			movieControlMode : number;
			naturalSize : MovieSize;
			playableDuration : number;
			playbackState : number;
			playing : boolean;
			repeatMode : number;
			scalingMode : number;
			sourceType : number;
			url : any;
			useApplicationAudioSession : boolean;
			volume : number;
			cancelAllThumbnailImageRequests () : void;
			pause () : void;
			play () : void;
			release () : void;
			requestThumbnailImagesAtTimes (times: Array<Number>, option: number, callback: (...args : any[]) => any) : void;
			setBackgroundView (view: Titanium.UI.View) : void;
			stop () : void;
			thumbnailImageAtTime (time: number, option: number) : Titanium.Blob;
			getAllowsAirPlay () : boolean;
			setAllowsAirPlay (allowsAirPlay: boolean) : void;
			getAutoplay () : boolean;
			setAutoplay (autoplay: boolean) : void;
			getContentURL () : string;
			setContentURL (contentURL: string) : void;
			getCurrentPlaybackTime () : number;
			setCurrentPlaybackTime (currentPlaybackTime: number) : void;
			getDuration () : number;
			setDuration (duration: number) : void;
			getEndPlaybackTime () : number;
			setEndPlaybackTime (endPlaybackTime: number) : void;
			getFullscreen () : boolean;
			setFullscreen (fullscreen: boolean) : void;
			getInitialPlaybackTime () : number;
			setInitialPlaybackTime (initialPlaybackTime: number) : void;
			getLoadState () : number;
			setMedia (media: Titanium.Blob) : void;
			setMedia (media: Titanium.Filesystem.File) : void;
			setMedia (media: string) : void;
			getMediaControlStyle () : number;
			setMediaControlStyle (mediaControlStyle: number) : void;
			getMediaTypes () : number;
			setMediaTypes (mediaTypes: number) : void;
			getMovieControlMode () : number;
			setMovieControlMode (movieControlMode: number) : void;
			getNaturalSize () : MovieSize;
			setNaturalSize (naturalSize: MovieSize) : void;
			getPlayableDuration () : number;
			getPlaybackState () : number;
			getPlaying () : boolean;
			getRepeatMode () : number;
			setRepeatMode (repeatMode: number) : void;
			getScalingMode () : number;
			setScalingMode (scalingMode: number) : void;
			getSourceType () : number;
			setSourceType (sourceType: number) : void;
			getUrl () : any;
			setUrl (url: string) : void;
			setUrl (url: Array<String>) : void;
			getUseApplicationAudioSession () : boolean;
			setUseApplicationAudioSession (useApplicationAudioSession: boolean) : void;
			getVolume () : number;
			setVolume (volume: number) : void;
		}
	}
	export module Network {
		export var bubbleParent : boolean;
		export var apiName : string;
		export var lifecycleContainer : any;
		export var INADDR_ANY : string;
		export var NETWORK_LAN : number;
		export var NETWORK_MOBILE : number;
		export var NETWORK_NONE : number;
		export var NETWORK_UNKNOWN : number;
		export var NETWORK_WIFI : number;
		export var NOTIFICATION_TYPE_ALERT : number;
		export var NOTIFICATION_TYPE_BADGE : number;
		export var NOTIFICATION_TYPE_SOUND : number;
		export var NOTIFICATION_TYPE_NEWSSTAND : number;
		export var READ_MODE : number;
		export var READ_WRITE_MODE : number;
		export var SOCKET_CLOSED : number;
		export var SOCKET_CONNECTED : number;
		export var SOCKET_ERROR : number;
		export var SOCKET_INITIALIZED : number;
		export var SOCKET_LISTENING : number;
		export var WRITE_MODE : number;
		export var TLS_VERSION_1_0 : number;
		export var TLS_VERSION_1_1 : number;
		export var TLS_VERSION_1_2 : number;
		export var PROGRESS_UNKNOWN : number;
		export var allHTTPCookies : Array<Titanium.Network.Cookie>;
		export var networkType : number;
		export var networkTypeName : string;
		export var online : boolean;
		export var remoteDeviceUUID : string;
		export var remoteNotificationTypes : Array<Number>;
		export var remoteNotificationsEnabled : boolean;
		export var httpURLFormatter : (...args : any[]) => any;
		export function addEventListener (name: string, callback: (...args : any[]) => any) : void;
		export function removeEventListener (name: string, callback: (...args : any[]) => any) : void;
		export function fireEvent (name: string, event: Dictionary<Object>) : void;
		export function applyProperties (props: Dictionary<Object>) : void;
		export function addConnectivityListener (callback: (...args : any[]) => any) : void;
		export function addHTTPCookie (cookie: Titanium.Network.Cookie) : void;
		export function addSystemCookie (cookie: Titanium.Network.Cookie) : void;
		export function createBonjourBrowser (serviceType: string, domain: string, parameters?: Dictionary<Titanium.Network.BonjourBrowser>) : Titanium.Network.BonjourBrowser;
		export function createBonjourService (name: string, type: string, domain: string, parameters?: Dictionary<Titanium.Network.BonjourService>) : Titanium.Network.BonjourService;
		export function createTCPSocket (hostName: string, port: number, mode: number, parameters: Dictionary<Titanium.Network.TCPSocket>) : Titanium.Network.TCPSocket;
		export function decodeURIComponent (value: string) : string;
		export function encodeURIComponent (value: string) : string;
		export function getHTTPCookies (domain: string, path: string, name: string) : Array<Titanium.Network.Cookie>;
		export function getHTTPCookiesForDomain (domain: string) : Array<Titanium.Network.Cookie>;
		export function getSystemCookies (domain: string, path: string, name: string) : Array<Titanium.Network.Cookie>;
		export function removeAllHTTPCookies () : void;
		export function removeAllSystemCookies () : void;
		export function removeHTTPCookie (domain: string, path: string, name: string) : void;
		export function removeHTTPCookiesForDomain (domain: string) : void;
		export function removeSystemCookie (domain: string, path: string, name: string) : void;
		export function registerForPushNotifications (config: PushNotificationConfig) : void;
		export function removeConnectivityListener (callback: (...args : any[]) => any) : void;
		export function unregisterForPushNotifications () : void;
		export function createCookie (parameters?: Dictionary<Titanium.Network.Cookie>) : Titanium.Network.Cookie;
		export function createHTTPClient (parameters?: Dictionary<Titanium.Network.HTTPClient>) : Titanium.Network.HTTPClient;
		export function getBubbleParent () : boolean;
		export function setBubbleParent (bubbleParent: boolean) : void;
		export function getApiName () : string;
		export function getLifecycleContainer () : any;
		export function setLifecycleContainer (lifecycleContainer: Titanium.UI.Window) : void;
		export function setLifecycleContainer (lifecycleContainer: Titanium.UI.TabGroup) : void;
		export function getAllHTTPCookies () : Array<Titanium.Network.Cookie>;
		export function getNetworkType () : number;
		export function getNetworkTypeName () : string;
		export function getOnline () : boolean;
		export function getRemoteDeviceUUID () : string;
		export function getRemoteNotificationTypes () : Array<Number>;
		export function getRemoteNotificationsEnabled () : boolean;
		export function getHttpURLFormatter () : (...args : any[]) => any;
		export function setHttpURLFormatter (httpURLFormatter: (...args : any[]) => any) : void;
		export interface BonjourBrowser extends Titanium.Proxy {
			domain : string;
			isSearching : boolean;
			serviceType : string;
			search () : void;
			stopSearch () : void;
			getDomain () : string;
			setDomain (domain: string) : void;
			getIsSearching () : boolean;
			setIsSearching (isSearching: boolean) : void;
			getServiceType () : string;
			setServiceType (serviceType: string) : void;
		}
		export interface BonjourService extends Titanium.Proxy {
			domain : string;
			isLocal : boolean;
			name : string;
			socket : any;
			type : string;
			publish (socket: any) : void;
			resolve (timeout: number) : void;
			stop () : void;
			getDomain () : string;
			setDomain (domain: string) : void;
			getIsLocal () : boolean;
			setIsLocal (isLocal: boolean) : void;
			getName () : string;
			setName (name: string) : void;
			getSocket () : any;
			setSocket (socket: any) : void;
			getType () : string;
			setType (type: string) : void;
		}
		export interface Cookie extends Titanium.Proxy {
			comment : string;
			domain : string;
			expiryDate : string;
			maxAge : number;
			httponly : boolean;
			name : string;
			originalUrl : string;
			path : string;
			secure : boolean;
			value : string;
			version : number;
			isValid () : boolean;
			getComment () : string;
			setComment (comment: string) : void;
			getDomain () : string;
			setDomain (domain: string) : void;
			getExpiryDate () : string;
			setExpiryDate (expiryDate: string) : void;
			getMaxAge () : number;
			setMaxAge (maxAge: number) : void;
			getHttponly () : boolean;
			setHttponly (httponly: boolean) : void;
			getName () : string;
			getOriginalUrl () : string;
			setOriginalUrl (originalUrl: string) : void;
			getPath () : string;
			setPath (path: string) : void;
			getSecure () : boolean;
			setSecure (secure: boolean) : void;
			getValue () : string;
			setValue (value: string) : void;
			getVersion () : number;
			setVersion (version: number) : void;
		}
		export interface HTTPClient extends Titanium.Proxy {
			DONE : number;
			HEADERS_RECEIVED : number;
			LOADING : number;
			OPENED : number;
			UNSENT : number;
			allResponseHeaders : string;
			autoEncodeUrl : boolean;
			autoRedirect : boolean;
			connected : boolean;
			connectionType : string;
			domain : string;
			enableKeepAlive : boolean;
			file : string;
			location : string;
			ondatastream : (...args : any[]) => any;
			onerror : (...args : any[]) => any;
			onload : (...args : any[]) => any;
			onreadystatechange : (...args : any[]) => any;
			onsendstream : (...args : any[]) => any;
			password : string;
			readyState : number;
			responseData : Titanium.Blob;
			responseText : string;
			responseXML : Titanium.XML.Document;
			securityManager : SecurityManagerProtocol;
			status : number;
			statusText : string;
			timeout : number;
			username : string;
			validatesSecureCertificate : boolean;
			withCredentials : boolean;
			tlsVersion : number;
			cache : boolean;
			abort () : void;
			addAuthFactory (scheme: string, factory: any) : void;
			addKeyManager (X509KeyManager: any) : void;
			addTrustManager (X509TrustManager: any) : void;
			clearCookies (host: string) : void;
			getResponseHeader (name: string) : string;
			open (method: string, url: string, async?: boolean) : void;
			send (data?: any) : void;
			send (data?: string) : void;
			send (data?: Titanium.Filesystem.File) : void;
			send (data?: Titanium.Blob) : void;
			setRequestHeader (name: string, value: string) : void;
			setTimeout (timeout: number) : void;
			getAllResponseHeaders () : string;
			getAutoEncodeUrl () : boolean;
			setAutoEncodeUrl (autoEncodeUrl: boolean) : void;
			getAutoRedirect () : boolean;
			setAutoRedirect (autoRedirect: boolean) : void;
			getConnected () : boolean;
			getConnectionType () : string;
			getDomain () : string;
			setDomain (domain: string) : void;
			getEnableKeepAlive () : boolean;
			setEnableKeepAlive (enableKeepAlive: boolean) : void;
			getFile () : string;
			setFile (file: string) : void;
			getLocation () : string;
			getOndatastream () : (...args : any[]) => any;
			setOndatastream (ondatastream: (...args : any[]) => any) : void;
			getOnerror () : (...args : any[]) => any;
			setOnerror (onerror: (...args : any[]) => any) : void;
			getOnload () : (...args : any[]) => any;
			setOnload (onload: (...args : any[]) => any) : void;
			getOnreadystatechange () : (...args : any[]) => any;
			setOnreadystatechange (onreadystatechange: (...args : any[]) => any) : void;
			getOnsendstream () : (...args : any[]) => any;
			setOnsendstream (onsendstream: (...args : any[]) => any) : void;
			getPassword () : string;
			setPassword (password: string) : void;
			getReadyState () : number;
			getResponseData () : Titanium.Blob;
			getResponseText () : string;
			getResponseXML () : Titanium.XML.Document;
			getSecurityManager () : SecurityManagerProtocol;
			setSecurityManager (securityManager: SecurityManagerProtocol) : void;
			getStatus () : number;
			getStatusText () : string;
			getTimeout () : number;
			setTimeout (timeout: number) : void;
			getUsername () : string;
			setUsername (username: string) : void;
			getValidatesSecureCertificate () : boolean;
			setValidatesSecureCertificate (validatesSecureCertificate: boolean) : void;
			getWithCredentials () : boolean;
			setWithCredentials (withCredentials: boolean) : void;
			getTlsVersion () : number;
			setTlsVersion (tlsVersion: number) : void;
			getCache () : boolean;
			setCache (cache: boolean) : void;
		}
		export module Socket {
			export var bubbleParent : boolean;
			export var apiName : string;
			export var lifecycleContainer : any;
			export var INITIALIZED : number;
			export var CONNECTED : number;
			export var LISTENING : number;
			export var CLOSED : number;
			export var ERROR : number;
			export function addEventListener (name: string, callback: (...args : any[]) => any) : void;
			export function removeEventListener (name: string, callback: (...args : any[]) => any) : void;
			export function fireEvent (name: string, event: Dictionary<Object>) : void;
			export function applyProperties (props: Dictionary<Object>) : void;
			export function createTCP (params?: Dictionary<Titanium.Network.Socket.TCP>) : Titanium.Network.Socket.TCP;
			export function getBubbleParent () : boolean;
			export function setBubbleParent (bubbleParent: boolean) : void;
			export function getApiName () : string;
			export function getLifecycleContainer () : any;
			export function setLifecycleContainer (lifecycleContainer: Titanium.UI.Window) : void;
			export function setLifecycleContainer (lifecycleContainer: Titanium.UI.TabGroup) : void;
			export interface TCP extends Titanium.IOStream {
				host : string;
				port : number;
				listenQueueSize : number;
				timeout : number;
				connected : (...args : any[]) => any;
				error : (...args : any[]) => any;
				accepted : (...args : any[]) => any;
				state : number;
				connect () : void;
				listen () : void;
				accept (options: AcceptDict) : void;
				getHost () : string;
				setHost (host: string) : void;
				getPort () : number;
				setPort (port: number) : void;
				getListenQueueSize () : number;
				setListenQueueSize (listenQueueSize: number) : void;
				getTimeout () : number;
				setTimeout (timeout: number) : void;
				getConnected () : (...args : any[]) => any;
				setConnected (connected: (...args : any[]) => any) : void;
				getError () : (...args : any[]) => any;
				setError (error: (...args : any[]) => any) : void;
				getAccepted () : (...args : any[]) => any;
				setAccepted (accepted: (...args : any[]) => any) : void;
				getState () : number;
			}
		}
		export interface TCPSocket extends Titanium.Proxy {
			hostName : string;
			isValid : boolean;
			mode : number;
			port : number;
			stripTerminator : boolean;
			close () : void;
			connect () : void;
			listen () : void;
			write (data: any, sendTo: number) : void;
			write (data: string, sendTo: number) : void;
			getHostName () : string;
			setHostName (hostName: string) : void;
			getIsValid () : boolean;
			setIsValid (isValid: boolean) : void;
			getMode () : number;
			setMode (mode: number) : void;
			getPort () : number;
			setPort (port: number) : void;
			getStripTerminator () : boolean;
			setStripTerminator (stripTerminator: boolean) : void;
		}
	}
	export module Platform {
		export var bubbleParent : boolean;
		export var apiName : string;
		export var lifecycleContainer : any;
		export var BATTERY_STATE_CHARGING : number;
		export var BATTERY_STATE_FULL : number;
		export var BATTERY_STATE_UNKNOWN : number;
		export var BATTERY_STATE_UNPLUGGED : number;
		export var address : string;
		export var architecture : string;
		export var availableMemory : number;
		export var batteryLevel : number;
		export var batteryMonitoring : boolean;
		export var batteryState : number;
		export var displayCaps : Titanium.Platform.DisplayCaps;
		export var id : string;
		export var locale : string;
		export var macaddress : string;
		export var manufacturer : string;
		export var model : string;
		export var name : string;
		export var netmask : string;
		export var osname : string;
		export var ostype : string;
		export var processorCount : number;
		export var runtime : string;
		export var username : string;
		export var version : string;
		export function addEventListener (name: string, callback: (...args : any[]) => any) : void;
		export function removeEventListener (name: string, callback: (...args : any[]) => any) : void;
		export function fireEvent (name: string, event: Dictionary<Object>) : void;
		export function applyProperties (props: Dictionary<Object>) : void;
		export function canOpenURL (url: string) : boolean;
		export function createUUID () : string;
		export function openURL (url: string) : boolean;
		export function is24HourTimeFormat () : boolean;
		export function getBubbleParent () : boolean;
		export function setBubbleParent (bubbleParent: boolean) : void;
		export function getApiName () : string;
		export function getLifecycleContainer () : any;
		export function setLifecycleContainer (lifecycleContainer: Titanium.UI.Window) : void;
		export function setLifecycleContainer (lifecycleContainer: Titanium.UI.TabGroup) : void;
		export function getAddress () : string;
		export function getArchitecture () : string;
		export function getAvailableMemory () : number;
		export function getBatteryLevel () : number;
		export function getBatteryMonitoring () : boolean;
		export function setBatteryMonitoring (batteryMonitoring: boolean) : void;
		export function getBatteryState () : number;
		export function getDisplayCaps () : Titanium.Platform.DisplayCaps;
		export function getId () : string;
		export function getLocale () : string;
		export function getMacaddress () : string;
		export function getManufacturer () : string;
		export function getModel () : string;
		export function getName () : string;
		export function getNetmask () : string;
		export function getOsname () : string;
		export function getOstype () : string;
		export function getProcessorCount () : number;
		export function getRuntime () : string;
		export function getUsername () : string;
		export function getVersion () : string;
		export interface Android  {
			API_LEVEL : number;
			PHYSICAL_SIZE_CATEGORY_LARGE : number;
			PHYSICAL_SIZE_CATEGORY_NORMAL : number;
			PHYSICAL_SIZE_CATEGORY_SMALL : number;
			PHYSICAL_SIZE_CATEGORY_UNDEFINED : number;
			PHYSICAL_SIZE_CATEGORY_XLARGE : number;
			physicalSizeCategory : number;
			getPhysicalSizeCategory () : number;
		}
		export interface DisplayCaps extends Titanium.Proxy {
			density : string;
			dpi : number;
			logicalDensityFactor : number;
			platformHeight : number;
			platformWidth : number;
			xdpi : number;
			ydpi : number;
			getDensity () : string;
			getDpi () : number;
			getLogicalDensityFactor () : number;
			getPlatformHeight () : number;
			getPlatformWidth () : number;
			getXdpi () : number;
			getYdpi () : number;
		}
	}
	export interface Stream  {
		MODE_READ : number;
		MODE_WRITE : number;
		MODE_APPEND : number;
		createStream (params: CreateStreamArgs) : Titanium.IOStream;
		read (sourceStream: Titanium.IOStream, buffer: Titanium.Buffer, offset?: number, length?: number, resultsCallback?: (...args : any[]) => any) : void;
		readAll (sourceStream: Titanium.IOStream, buffer?: Titanium.Buffer, resultsCallback?: (...args : any[]) => any) : any;
		write (outputStream: Titanium.IOStream, buffer: Titanium.Buffer, offset?: number, length?: number, resultsCallback?: (...args : any[]) => any) : void;
		writeStream (inputStream: Titanium.IOStream, outputStream: Titanium.IOStream, maxChunkSize: number, resultsCallback?: (...args : any[]) => any) : void;
		pump (inputStream: Titanium.IOStream, handler: (...args : any[]) => any, maxChunkSize: number, isAsync?: boolean) : void;
	}
	export interface Utils  {
		base64decode (obj: string) : Titanium.Blob;
		base64decode (obj: Titanium.Blob) : Titanium.Blob;
		base64encode (obj: string) : Titanium.Blob;
		base64encode (obj: Titanium.Blob) : Titanium.Blob;
		base64encode (obj: Titanium.Filesystem.File) : Titanium.Blob;
		md5HexDigest (obj: string) : string;
		md5HexDigest (obj: Titanium.Blob) : string;
		sha1 (obj: string) : string;
		sha1 (obj: Titanium.Blob) : string;
		sha256 (obj: string) : string;
		sha256 (obj: Titanium.Blob) : string;
	}
	export interface WatchSession  {
		isSupported : boolean;
		isPaired : boolean;
		isWatchAppInstalled : boolean;
		isComplicationEnabled : boolean;
		isReachable : boolean;
		recentApplicationContext : Dictionary<Object>;
		activateSession () : void;
		sendMessage (message: Dictionary<Object>, reply?: (...args : any[]) => any) : void;
		updateApplicationContext (params: Dictionary<Object>) : void;
		transferUserInfo (params: Dictionary<Object>) : void;
		transferFile (params: Dictionary<Object>) : void;
		transferCurrentComplication (params: Dictionary<Object>) : void;
		cancelAllUserInfoTransfers () : void;
		cancelAllFileTransfers () : void;
		cancelAllTransfers () : void;
		getIsSupported () : boolean;
		getIsPaired () : boolean;
		getIsWatchAppInstalled () : boolean;
		getIsComplicationEnabled () : boolean;
		getIsReachable () : boolean;
		getRecentApplicationContext () : Dictionary<Object>;
	}
	export module XML {
		export var bubbleParent : boolean;
		export var apiName : string;
		export var lifecycleContainer : any;
		export function addEventListener (name: string, callback: (...args : any[]) => any) : void;
		export function removeEventListener (name: string, callback: (...args : any[]) => any) : void;
		export function fireEvent (name: string, event: Dictionary<Object>) : void;
		export function applyProperties (props: Dictionary<Object>) : void;
		export function parseString (xml: string) : Titanium.XML.Document;
		export function serializeToString (node: Titanium.XML.Node) : string;
		export function getBubbleParent () : boolean;
		export function setBubbleParent (bubbleParent: boolean) : void;
		export function getApiName () : string;
		export function getLifecycleContainer () : any;
		export function setLifecycleContainer (lifecycleContainer: Titanium.UI.Window) : void;
		export function setLifecycleContainer (lifecycleContainer: Titanium.UI.TabGroup) : void;
		export interface Attr extends Titanium.XML.Node {
			name : string;
			ownerElement : Titanium.XML.Element;
			specified : boolean;
			value : string;
			getName () : string;
			getOwnerElement () : Titanium.XML.Element;
			getSpecified () : boolean;
			getValue () : string;
			setValue (value: string) : void;
		}
		export interface Node extends Titanium.Proxy {
			ELEMENT_NODE : number;
			ATTRIBUTE_NODE : number;
			TEXT_NODE : number;
			CDATA_SECTION_NODE : number;
			ENTITY_REFERENCE_NODE : number;
			ENTITY_NODE : number;
			PROCESSING_INSTRUCTION_NODE : number;
			COMMENT_NODE : number;
			DOCUMENT_NODE : number;
			DOCUMENT_TYPE_NODE : number;
			DOCUMENT_FRAGMENT_NODE : number;
			NOTATION_NODE : number;
			nodeName : string;
			nodeValue : string;
			textContent : string;
			text : string;
			nodeType : number;
			parentNode : Titanium.XML.Node;
			childNodes : Titanium.XML.NodeList;
			firstChild : Titanium.XML.Node;
			lastChild : Titanium.XML.Node;
			previousSibling : Titanium.XML.Node;
			nextSibling : Titanium.XML.Node;
			attributes : Titanium.XML.NamedNodeMap;
			ownerDocument : Titanium.XML.Document;
			namespaceURI : string;
			prefix : string;
			localName : string;
			appendChild (newChild: Titanium.XML.Node) : Titanium.XML.Node;
			cloneNode (deep: boolean) : Titanium.XML.Node;
			hasAttributes () : boolean;
			hasChildNodes () : boolean;
			insertBefore (newChild: Titanium.XML.Node, refChild: Titanium.XML.Node) : Titanium.XML.Node;
			isSupported (feature: string, version: string) : boolean;
			normalize () : void;
			removeChild (oldChild: Titanium.XML.Node) : Titanium.XML.Node;
			replaceChild (newChild: Titanium.XML.Node, oldChild: Titanium.XML.Node) : Titanium.XML.Node;
			getNodeName () : string;
			getNodeValue () : string;
			setNodeValue (nodeValue: string) : void;
			getTextContent () : string;
			getText () : string;
			getNodeType () : number;
			getParentNode () : Titanium.XML.Node;
			getChildNodes () : Titanium.XML.NodeList;
			getFirstChild () : Titanium.XML.Node;
			getLastChild () : Titanium.XML.Node;
			getPreviousSibling () : Titanium.XML.Node;
			getNextSibling () : Titanium.XML.Node;
			getAttributes () : Titanium.XML.NamedNodeMap;
			getOwnerDocument () : Titanium.XML.Document;
			getNamespaceURI () : string;
			getPrefix () : string;
			setPrefix (prefix: string) : void;
			getLocalName () : string;
			setLocalName (localName: string) : void;
		}
		export enum CDATASection {

		}
		export interface Text extends Titanium.XML.CharacterData {
			splitText (offset: number) : Titanium.XML.Text;
		}
		export interface CharacterData extends Titanium.XML.Node {
			data : string;
			length : number;
			appendData (arg: string) : void;
			deleteData (offset: number, count: number) : void;
			insertData (offset: number, arg: string) : void;
			replaceData (offset: number, count: number, arg: string) : void;
			substringData (offset: number, count: number) : string;
			getData () : string;
			setData (data: string) : void;
			getLength () : number;
		}
		export enum Comment {

		}
		export interface DOMImplementation extends Titanium.Proxy {
			createDocument (namespaceURI: string, qualifiedName: string, doctype: Titanium.XML.DocumentType) : Titanium.XML.Document;
			createDocumentType (qualifiedName: string, publicId: string, systemId: string) : Titanium.XML.DocumentType;
			hasFeature (feature: string, version: string) : boolean;
		}
		export interface Document extends Titanium.XML.Node {
			doctype : Titanium.XML.DocumentType;
			documentElement : Titanium.XML.Element;
			implementation : Titanium.XML.DOMImplementation;
			createAttribute (name: string) : Titanium.XML.Attr;
			createAttributeNS (namespaceURI: string, name: string) : Titanium.XML.Attr;
			createCDATASection (data: string) : Titanium.XML.CDATASection;
			createComment (data: string) : Titanium.XML.Comment;
			createDocumentFragment () : Titanium.XML.DocumentFragment;
			createElement (tagName: string) : Titanium.XML.Element;
			createElementNS (namespaceURI: string, name: string) : Titanium.XML.Element;
			createEntityReference (name: string) : Titanium.XML.EntityReference;
			createProcessingInstruction (target: string, data: string) : Titanium.XML.ProcessingInstruction;
			createTextNode (data: string) : Titanium.XML.Text;
			getElementById (elementId: string) : Titanium.XML.Element;
			getElementsByTagName (tagname: string) : Titanium.XML.NodeList;
			getElementsByTagNameNS (namespaceURI: string, localname: string) : Titanium.XML.NodeList;
			importNode (importedNode: Titanium.XML.Node, deep: boolean) : Titanium.XML.Node;
			getDoctype () : Titanium.XML.DocumentType;
			getDocumentElement () : Titanium.XML.Element;
			getImplementation () : Titanium.XML.DOMImplementation;
		}
		export enum DocumentFragment {

		}
		export interface DocumentType extends Titanium.XML.Node {
			entities : Titanium.XML.NamedNodeMap;
			internalSubset : string;
			name : string;
			notations : Titanium.XML.NamedNodeMap;
			publicId : string;
			systemId : string;
			getEntities () : Titanium.XML.NamedNodeMap;
			getInternalSubset () : string;
			getName () : string;
			getNotations () : Titanium.XML.NamedNodeMap;
			getPublicId () : string;
			getSystemId () : string;
		}
		export interface Element extends Titanium.XML.Node {
			tagName : string;
			getAttribute (name: string) : string;
			setAttribute (name: string, value: string) : void;
			removeAttribute (name: string) : void;
			getAttributeNode (name: string) : Titanium.XML.Attr;
			setAttributeNode (newAttr: Titanium.XML.Attr) : Titanium.XML.Attr;
			removeAttributeNode (oldAttr: Titanium.XML.Attr) : void;
			getElementsByTagName (name: string) : Titanium.XML.NodeList;
			getAttributeNS (namespaceURI: string, localName: string) : string;
			setAttributeNS (namespaceURI: string, qualifiedName: string, value: string) : void;
			removeAttributeNS (namespaceURI: string, localName: string) : void;
			getAttributeNodeNS (namespaceURI: string, localName: string) : Titanium.XML.Attr;
			setAttributeNodeNS (newAttr: Titanium.XML.Attr) : Titanium.XML.Attr;
			getElementsByTagNameNS (namespaceURI: string, localName: string) : Titanium.XML.NodeList;
			hasAttribute (name: string) : boolean;
			hasAttributeNS (namespaceURI: string, localName: string) : boolean;
			getTagName () : string;
		}
		export interface Entity extends Titanium.XML.Node {
			notationName : string;
			publicId : string;
			systemId : string;
			getNotationName () : string;
			getPublicId () : string;
			getSystemId () : string;
		}
		export enum EntityReference {

		}
		export interface NamedNodeMap extends Titanium.Proxy {
			length : number;
			getNamedItem (name: string) : Titanium.XML.Node;
			setNamedItem (node: Titanium.XML.Node) : Titanium.XML.Node;
			removeNamedItem (name: string) : Titanium.XML.Node;
			item (index: number) : Titanium.XML.Node;
			getNamedItemNS (namespaceURI: string, localName: string) : Titanium.XML.Node;
			setNamedItemNS (node: Titanium.XML.Node) : Titanium.XML.Node;
			removeNamedItemNS (namespaceURI: string, localName: string) : Titanium.XML.Node;
			getLength () : number;
		}
		export interface NodeList extends Titanium.Proxy {
			length : number;
			item (index: number) : Titanium.XML.Node;
			getLength () : number;
		}
		export interface Notation extends Titanium.Proxy {
			publicId : string;
			systemId : string;
			getPublicId () : string;
			getSystemId () : string;
		}
		export interface ProcessingInstruction extends Titanium.Proxy {
			data : string;
			target : string;
			getData () : string;
			setData (data: string) : void;
			getTarget () : string;
		}
	}
	export interface Yahoo  {
		yql (yql: string, callback: (...args : any[]) => any) : void;
	}
}

declare class Dictionary<Object>  {

}

declare module Global {
	export function alert (message: string) : void;
	export function clearInterval (timerId: number) : void;
	export function clearTimeout (timerId: number) : void;
	export function decodeURIComponent (encodedURI: string) : string;
	export function encodeURIComponent (string: string) : string;
	export function L (key: string, hint?: string) : string;
	export function require (moduleId: string) : any;
	export function setInterval (_function: (...args : any[]) => any, delay: number) : number;
	export function setTimeout (_function: (...args : any[]) => any, delay: number) : number;
	export interface JSON  {
		stringify (value: any, replacer?: (...args : any[]) => any, space?: number) : string;
		stringify (value: any, replacer?: Array<String>, space?: string) : string;
		stringify (value: any, replacer?: Array<String>, space?: number) : string;
		stringify (value: any, replacer?: (...args : any[]) => any, space?: string) : string;
		parse (text: string, reviver: (...args : any[]) => any) : any;
	}
	export interface String  {
		format (formatString: string, value: string) : string;
		format (formatString: string, value: number) : string;
		formatCurrency (value: number) : string;
		formatDate (date: Date, format?: string) : string;
		formatDecimal (value: number, locale?: string, pattern?: string) : string;
		formatTime (date: Date, format?: string) : string;
	}
	export interface console  {
		log (message: any) : void;
		info (message: any) : void;
		warn (message: any) : void;
		error (message: any) : void;
		debug (message: any) : void;
	}
}

declare module Modules {

	export module Cloud {
		export var bubbleParent : boolean;
		export var apiName : string;
		export var lifecycleContainer : any;
		export var debug : boolean;
		export var ondatastream : (...args : any[]) => any;
		export var onsendstream : (...args : any[]) => any;
		export var useSecure : boolean;
		export var sessionId : string;
		export var accessToken : string;
		export var expiresIn : number;
		export function applyProperties (props: Dictionary<Object>) : void;
		export function hasStoredSession () : boolean;
		export function retrieveStoredSession () : string;
		export function sendRequest (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
		export function createX509CertificatePinningSecurityManager (params: Array<Dictionary<Object>>) : SecurityManagerProtocol;
		export function getBubbleParent () : boolean;
		export function setBubbleParent (bubbleParent: boolean) : void;
		export function getApiName () : string;
		export function getLifecycleContainer () : any;
		export function setLifecycleContainer (lifecycleContainer: Titanium.UI.Window) : void;
		export function setLifecycleContainer (lifecycleContainer: Titanium.UI.TabGroup) : void;
		export function getDebug () : boolean;
		export function setDebug (debug: boolean) : void;
		export function getOndatastream () : (...args : any[]) => any;
		export function setOndatastream (ondatastream: (...args : any[]) => any) : void;
		export function getOnsendstream () : (...args : any[]) => any;
		export function setOnsendstream (onsendstream: (...args : any[]) => any) : void;
		export function getUseSecure () : boolean;
		export function setUseSecure (useSecure: boolean) : void;
		export function getSessionId () : string;
		export function setSessionId (sessionId: string) : void;
		export function getAccessToken () : string;
		export function setAccessToken (accessToken: string) : void;
		export function getExpiresIn () : number;
		export interface ACLs  {
			create (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			update (parameters?: Dictionary<Object>, callback?: (...args : any[]) => any) : void;
			show (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			remove (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			addUser (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			removeUser (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			checkUser (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
		}
		export interface Chats  {
			create (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			remove (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			getChatGroups (parameters?: Dictionary<Object>, callback?: (...args : any[]) => any) : void;
			queryChatGroups (parameters?: Dictionary<Object>, callback?: (...args : any[]) => any) : void;
			query (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
		}
		export interface Checkins  {
			create (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			query (parameters?: Dictionary<Object>, callback?: (...args : any[]) => any) : void;
			remove (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			show (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
		}
		export interface Clients  {
			geolocate (parameters?: Dictionary<Object>, callback?: (...args : any[]) => any) : void;
		}
		export interface Emails  {
			send (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
		}
		export interface Events  {
			create (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			show (parameters?: Dictionary<Object>, callback?: (...args : any[]) => any) : void;
			showOccurrences (parameters?: Dictionary<Object>, callback?: (...args : any[]) => any) : void;
			query (parameters?: Dictionary<Object>, callback?: (...args : any[]) => any) : void;
			queryOccurrences (parameters?: Dictionary<Object>, callback?: (...args : any[]) => any) : void;
			search (parameters?: Dictionary<Object>, callback?: (...args : any[]) => any) : void;
			searchOccurrences (parameters?: Dictionary<Object>, callback?: (...args : any[]) => any) : void;
			remove (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			update (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
		}
		export interface Files  {
			create (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			query (parameters?: Dictionary<Object>, callback?: (...args : any[]) => any) : void;
			remove (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			show (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			update (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
		}
		export interface Friends  {
			add (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			requests (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			approve (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			remove (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			search (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
		}
		export interface GeoFences  {
			create (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			query (parameters?: Dictionary<Object>, callback?: (...args : any[]) => any) : void;
			remove (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			update (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
		}
		export interface KeyValues  {
			append (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			get (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			increment (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			remove (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			set (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
		}
		export interface Likes  {
			create (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			remove (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
		}
		export interface Messages  {
			create (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			reply (parameters?: Dictionary<Object>, callback?: (...args : any[]) => any) : void;
			show (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			showInbox (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			showSent (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			showThreads (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			showThread (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			remove (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			removeThread (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
		}
		export interface Objects  {
			create (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			query (parameters?: Dictionary<Object>, callback?: (...args : any[]) => any) : void;
			remove (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			show (parameters?: Dictionary<Object>, callback?: (...args : any[]) => any) : void;
			update (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
		}
		export interface PhotoCollections  {
			create (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			remove (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			search (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			show (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			showPhotos (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			showSubCollections (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			update (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
		}
		export interface Photos  {
			create (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			query (parameters?: Dictionary<Object>, callback?: (...args : any[]) => any) : void;
			remove (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			search (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			show (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			update (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
		}
		export interface Places  {
			create (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			query (parameters?: Dictionary<Object>, callback?: (...args : any[]) => any) : void;
			remove (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			search (parameters?: Dictionary<Object>, callback?: (...args : any[]) => any) : void;
			show (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			update (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
		}
		export interface Posts  {
			create (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			query (parameters?: Dictionary<Object>, callback?: (...args : any[]) => any) : void;
			remove (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			show (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			update (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
		}
		export interface PushNotifications  {
			notify (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			notifyTokens (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			resetBadge (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			setBadge (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			subscribe (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			subscribeToken (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			unsubscribe (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			unsubscribeToken (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			updateSubscription (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			queryChannels (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			showChannels (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			query (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
		}
		export interface PushSchedules  {
			create (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			remove (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			query (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
		}
		export interface Reviews  {
			create (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			query (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			remove (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			show (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			update (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
		}
		export interface SocialIntegrations  {
			externalAccountLink (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			externalAccountLogin (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			externalAccountUnlink (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			searchFacebookFriends (callback: (...args : any[]) => any) : void;
		}
		export interface Statuses  {
			create (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			update (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			show (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			delete (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			query (parameters?: Dictionary<Object>, callback?: (...args : any[]) => any) : void;
			search (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
		}
		export interface Users  {
			create (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			login (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			logout (parameters?: Dictionary<Object>, callback?: (...args : any[]) => any) : void;
			query (parameters?: Dictionary<Object>, callback?: (...args : any[]) => any) : void;
			search (parameters?: Dictionary<Object>, callback?: (...args : any[]) => any) : void;
			show (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			showMe (callback: (...args : any[]) => any) : void;
			update (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			remove (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			requestResetPassword (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			resendConfirmation (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			secureCreate (parameters?: Dictionary<CloudUsersSecureDialog>, callback?: (...args : any[]) => any) : void;
			secureLogin (parameters?: Dictionary<CloudUsersSecureDialog>, callback?: (...args : any[]) => any) : void;
			secureStatus () : boolean;
		}
	}
	export interface CloudPush  {
		enabled : boolean;
		showTrayNotification : boolean;
		showAppOnTrayClick : boolean;
		showTrayNotificationsWhenFocused : boolean;
		focusAppOnPush : boolean;
		singleCallback : boolean;
		SUCCESS : number;
		SERVICE_MISSING : number;
		SERVICE_VERSION_UPDATE_REQUIRED : number;
		SERVICE_DISABLED : number;
		SERVICE_INVALID : number;
		retrieveDeviceToken (config: CloudPushNotificationConfig) : void;
		clearStatus () : void;
		isGooglePlayServicesAvailable () : number;
		getEnabled () : boolean;
		setEnabled (enabled: boolean) : void;
		getShowTrayNotification () : boolean;
		setShowTrayNotification (showTrayNotification: boolean) : void;
		getShowAppOnTrayClick () : boolean;
		setShowAppOnTrayClick (showAppOnTrayClick: boolean) : void;
		getShowTrayNotificationsWhenFocused () : boolean;
		setShowTrayNotificationsWhenFocused (showTrayNotificationsWhenFocused: boolean) : void;
		getFocusAppOnPush () : boolean;
		setFocusAppOnPush (focusAppOnPush: boolean) : void;
		getSingleCallback () : boolean;
		setSingleCallback (singleCallback: boolean) : void;
	}
}

declare class CloudACLsResponse extends CloudResponse {
	acls : Array<Dictionary<Object>>;
}

declare class CloudResponse  {
	success : boolean;
	error : boolean;
	meta : Dictionary<Object>;
	code : number;
	message : string;
}

declare class CloudACLsCheckResponse extends CloudResponse {
	permission : Dictionary<Object>;
}

declare class CloudChatsResponse extends CloudResponse {
	chats : Array<Dictionary<Object>>;
}

declare class CloudChatGroupsResponse extends CloudResponse {
	chat_groups : Array<Dictionary<Object>>;
}

declare class CloudCheckinsResponse extends CloudResponse {
	checkins : Array<Dictionary<Object>>;
}

declare class CloudClientsResponse extends CloudResponse {
	ip_address : string;
	location : Dictionary<Object>;
}

declare class CloudStreamProgress  {
	progress : number;
	url : string;
}

declare enum CloudEmailsResponse {

}

declare class CloudEventsResponse extends CloudResponse {
	events : Array<Dictionary<Object>>;
}

declare class CloudEventOccurrencesResponse extends CloudResponse {
	event_occurrences : Array<Dictionary<Object>>;
}

declare class CloudFilesResponse extends CloudResponse {
	files : Array<Dictionary<Object>>;
}

declare class CloudFriendsResponse extends CloudResponse {
	users : Array<Dictionary<Object>>;
}

declare class CloudFriendRequestsResponse extends CloudResponse {
	friend_requests : Array<Dictionary<Object>>;
}

declare class CloudGeoFenceResponse extends CloudResponse {
	geo_fences : Array<Dictionary<Object>>;
}

declare class CloudKeyValuesResponse extends CloudResponse {
	keyvalues : Array<Dictionary<Object>>;
}

declare class CloudLikesResponse extends CloudResponse {
	likes : Array<Dictionary<Object>>;
}

declare class CloudMessagesResponse extends CloudResponse {
	messages : Array<Dictionary<Object>>;
}

declare class CloudObjectsResponse extends CloudResponse {
	classname : Array<Dictionary<Object>>;
}

declare class CloudPhotoCollectionsResponse extends CloudResponse {
	collections : Array<Dictionary<Object>>;
}

declare class CloudPhotoCollectionsPhotosResponse extends CloudResponse {
	photos : Array<Dictionary<Object>>;
}

declare class CloudPhotosResponse extends CloudResponse {
	photos : Array<Dictionary<Object>>;
}

declare class CloudPlacesResponse extends CloudResponse {
	places : Array<Dictionary<Object>>;
}

declare class CloudPostsResponse extends CloudResponse {
	posts : Array<Dictionary<Object>>;
}

declare enum CloudPushNotificationsResponse {

}

declare class CloudPushNotificationsQueryChannelResponse extends CloudResponse {
	push_channels : Array<String>;
}

declare class CloudPushNotificationsShowChannelResponse extends CloudResponse {
	devices : Dictionary<Object>;
}

declare class CloudPushNotificationsQueryResponse extends CloudResponse {
	subscriptions : Array<Dictionary<Object>>;
}

declare class CloudPushSchedulesResponse extends CloudResponse {
	push_schedules : Array<Object>;
}

declare class CloudReviewsResponse extends CloudResponse {
	reviews : Array<Dictionary<Object>>;
}

declare class CloudSocialIntegrationsResponse extends CloudResponse {
	users : Array<Dictionary<Object>>;
}

declare class CloudStatusesResponse extends CloudResponse {
	statuses : Array<Dictionary<Object>>;
}

declare class CloudUsersSecureDialog  {
	title : string;
}

declare class CloudUsersResponse extends CloudResponse {
	users : Array<Dictionary<Object>>;
}

declare class CloudUsersSecureResponse extends CloudResponse {
	accessToken : string;
	expiresIn : number;
}

declare class CloudPushNotificationConfig  {
	success : (...args : any[]) => any;
	error : (...args : any[]) => any;
}

declare class CloudPushNotificationSuccessArg  {
	deviceToken : string;
}

declare class CloudPushNotificationErrorArg  {
	error : string;
}

declare class ActivityResult  {
	requestCode : number;
	resultCode : number;
	intent : Titanium.Android.Intent;
}

declare class ServiceIntentOptions  {
	url : string;
	startMode : number;
}

declare class CalendarPermissionResponse  {
	success : boolean;
	error : string;
	code : number;
}

declare class launchOptions  {
	url : string;
	source : string;
	launchOptionsLocationKey : boolean;
}

declare class NotificationParams  {
	alertAction : string;
	alertBody : string;
	alertLaunchImage : string;
	badge : number;
	category : string;
	date : Date;
	repeat : string;
	sound : string;
	timezone : string;
	userInfo : Dictionary<Object>;
}

declare class UserNotificationSettings  {
	types : Array<Number>;
	categories : Array<Titanium.App.iOS.UserNotificationCategory>;
}

declare class ImageAsCroppedDict  {
	width : number;
	height : number;
	x : number;
	y : number;
}

declare class EventsAuthorizationResponse  {
	success : boolean;
	error : string;
	code : number;
}

declare class daysOfTheWeekDictionary  {
	daysOfWeek : number;
	week : number;
}

declare class recurrenceEndDictionary  {
	endDate : Date;
	occurrenceCount : number;
}

declare class EncodeNumberDict  {
	source : number;
	dest : Titanium.Buffer;
	type : string;
	position : number;
	byteOrder : number;
}

declare class DecodeNumberDict  {
	source : Titanium.Buffer;
	type : string;
	position : number;
	byteOrder : number;
}

declare class EncodeStringDict  {
	source : string;
	dest : Titanium.Buffer;
	destPosition : number;
	sourcePosition : number;
	sourceLength : number;
	charset : string;
}

declare class DecodeStringDict  {
	source : Titanium.Buffer;
	position : number;
	length : number;
	charset : string;
}

declare class showContactsParams  {
	animated : boolean;
	fields : Array<String>;
	cancel : (...args : any[]) => any;
	selectedPerson : (...args : any[]) => any;
	selectedProperty : (...args : any[]) => any;
}

declare enum ContactsAuthorizationResponse {

}

declare class ErrorResponse  {
	success : boolean;
	error : string;
	code : number;
}

declare enum SuccessResponse {

}

declare enum FailureResponse {

}

declare class FacebookGraphResponsev1  {
	success : boolean;
	error : string;
	path : string;
	result : string;
}

declare class FacebookDialogResponsev1  {
	success : boolean;
	error : string;
	cancelled : boolean;
	result : string;
}

declare class FacebookRESTResponsev1  {
	success : boolean;
	error : string;
	method : string;
	result : string;
}

declare enum RequestStorageAccessResult {

}

declare class LocationResults extends ErrorResponse {
	provider : LocationProviderDict;
	coords : LocationCoordinates;
}

declare class LocationCoordinates  {
	latitude : number;
	longitude : number;
	altitude : number;
	accuracy : number;
	altitudeAccuracy : number;
	heading : number;
	speed : number;
	timestamp : number;
	floor : LocationCoordinatesFloor;
}

declare class LocationCoordinatesFloor  {
	level : number;
}

declare class ForwardGeocodeResponse extends ErrorResponse {
	accuracy : number;
	longitude : string;
	latitude : string;
	street : string;
	street1 : string;
	city : string;
	region1 : string;
	region2 : string;
	postalCode : string;
	country : string;
	countryCode : string;
	country_code : string;
	displayAddress : string;
	address : string;
}

declare class HeadingResponse extends ErrorResponse {
	heading : HeadingData;
}

declare class HeadingData  {
	accuracy : number;
	magneticHeading : number;
	trueHeading : number;
	timestamp : number;
	x : number;
	y : number;
	z : number;
}

declare class LocationProviderDict  {
	accuracy : number;
	name : string;
	power : number;
}

declare class ReverseGeocodeResponse extends ErrorResponse {
	places : Array<GeocodedAddress>;
}

declare class GeocodedAddress  {
	street : string;
	street1 : string;
	city : string;
	region1 : string;
	region2 : string;
	postalCode : string;
	zipcode : string;
	country : string;
	countryCode : string;
	country_code : string;
	longitude : string;
	latitude : string;
	displayAddress : string;
	address : string;
}

declare enum LocationAuthorizationResponse {

}

declare class MapRegionType  {
	longitude : number;
	latitude : number;
	longitudeDelta : number;
	latitudeDelta : number;
}

declare class MapLocationType  {
	longitude : number;
	latitude : number;
	longitudeDelta : number;
	latitudeDelta : number;
	animate : boolean;
	regionFit : boolean;
}

declare class MapRouteType  {
	name : string;
	points : Array<MapPointType>;
	color : string;
	width : number;
}

declare class MapPointType  {
	longitude : number;
	latitude : number;
}

declare class MediaScannerResponse  {
	path : string;
	uri : string;
}

declare class MusicLibraryOptionsType  {
	success : (...args : any[]) => any;
	error : (...args : any[]) => any;
	cancel : (...args : any[]) => any;
	autohide : boolean;
	animated : boolean;
	mediaTypes : any;
	allowMultipleSelections : boolean;
}

declare class MusicLibraryResponseType  {
	representative : Titanium.Media.Item;
	items : Array<Titanium.Media.Item>;
	types : number;
}

declare class MediaQueryType  {
	grouping : number;
	mediaType : any;
	title : any;
	albumTitle : any;
	artist : any;
	albumArtist : any;
	genre : any;
	composer : any;
	isCompilation : any;
}

declare class MediaQueryInfoType  {
	value : any;
	exact : boolean;
}

declare class CameraOptionsType  {
	success : (...args : any[]) => any;
	error : (...args : any[]) => any;
	cancel : (...args : any[]) => any;
	autohide : boolean;
	animated : boolean;
	saveToPhotoGallery : boolean;
	allowEditing : boolean;
	mediaTypes : Array<String>;
	videoMaximumDuration : number;
	videoQuality : number;
	showControls : boolean;
	overlay : Titanium.UI.View;
	transform : Titanium.UI._2DMatrix;
	inPopOver : boolean;
	popoverView : Titanium.UI.View;
	arrowDirection : number;
	autorotate : boolean;
}

declare class PhotoGalleryOptionsType  {
	success : (...args : any[]) => any;
	error : (...args : any[]) => any;
	cancel : (...args : any[]) => any;
	autohide : boolean;
	animated : boolean;
	allowEditing : boolean;
	mediaTypes : Array<String>;
	popoverView : Titanium.UI.View;
	arrowDirection : number;
}

declare class CameraMediaItemType  {
	media : Titanium.Blob;
	mediaType : string;
	cropRect : CropRectType;
	previewRect : PreviewRectType;
	livePhoto : Titanium.UI.iOS.LivePhoto;
}

declare class CropRectType  {
	x : number;
	y : number;
	width : number;
	height : number;
}

declare class PreviewRectType  {
	width : number;
	height : number;
}

declare class PreviewImageOptions  {
	image : Titanium.Blob;
	success : (...args : any[]) => any;
	error : (...args : any[]) => any;
}

declare class PreviewImageError  {
	message : string;
}

declare class ScreenshotResult  {
	media : Titanium.Blob;
}

declare enum MediaAuthorizationResponse {

}

declare enum RequestCameraAccessResult {

}

declare class RouteDescription  {
	inputs : Array<Object>;
	outputs : Array<Object>;
}

declare class PlayerQueue  {
	items : Array<Titanium.Media.Item>;
}

declare class ThumbnailResponse extends ErrorResponse {
	image : Titanium.Blob;
	time : number;
}

declare class MovieSize  {
	width : number;
	height : number;
}

declare class SecurityManagerProtocol  {
	willHandleURL (url: any) : boolean;
	connectionDelegateForUrl (url: any) : APSConnectionDelegate;
	getTrustManagers (proxy: any) : Array<Object>;
	getKeyManagers (proxy: any) : Array<Object>;
}

declare class APSConnectionDelegate  {

}

declare class ReadyStatePayload  {
	readyState : number;
}

declare class PushNotificationConfig  {
	types : Array<Number>;
	success : (...args : any[]) => any;
	error : (...args : any[]) => any;
	callback : (...args : any[]) => any;
}

declare class PushNotificationSuccessArg  {
	type : string;
	deviceToken : string;
}

declare class PushNotificationErrorArg  {
	type : string;
}

declare class PushNotificationData  {
	data : Dictionary<Object>;
	inBackground : boolean;
}

declare class ConnectedCallbackArgs  {
	socket : Titanium.Network.Socket.TCP;
}

declare class ErrorCallbackArgs  {
	socket : Titanium.Network.Socket.TCP;
	errorCode : number;
}

declare class AcceptedCallbackArgs  {
	socket : Titanium.Network.Socket.TCP;
	inbound : Titanium.Network.Socket.TCP;
}

declare class AcceptDict  {
	timeout : number;
	error : (...args : any[]) => any;
}

declare class CreateStreamArgs  {
	source : any;
	mode : number;
}

declare class ReadCallbackArgs extends ErrorResponse {
	source : Titanium.IOStream;
	bytesProcessed : number;
	errorState : number;
	errorDescription : string;
}

declare class WriteCallbackArgs extends ErrorResponse {
	source : Titanium.IOStream;
	bytesProcessed : number;
	errorState : number;
	errorDescription : string;
}

declare class WriteStreamCallbackArgs extends ErrorResponse {
	fromStream : Titanium.IOStream;
	toStream : Titanium.IOStream;
	bytesProcessed : number;
	errorState : number;
	errorDescription : string;
}

declare class PumpCallbackArgs extends ErrorResponse {
	source : Titanium.IOStream;
	buffer : Titanium.Buffer;
	bytesProcessed : number;
	totalBytesProcessed : number;
	errorState : number;
	errorDescription : string;
}

declare class CreateBufferArgs  {
	value : any;
	length : number;
	type : string;
	byteOrder : number;
}

declare class MatrixCreationDict  {
	scale : number;
	rotate : number;
	anchorPoint : Dictionary<Object>;
}

declare class Attribute  {
	type : number;
	value : number;
	range : Array<Number>;
}

declare class Font  {
	fontFamily : string;
	fontSize : any;
	fontWeight : string;
	fontStyle : string;
	textStyle : string;
}

declare class ItemTemplate  {
	properties : Dictionary<Titanium.UI.ListItem>;
	events : Dictionary<Object>;
	childTemplates : Array<ViewTemplate>;
}

declare class ViewTemplate  {
	type : string;
	bindId : string;
	properties : Dictionary<Object>;
	events : Dictionary<Object>;
	childTemplates : Array<ViewTemplate>;
}

declare class ListDataItem  {
	template : any;
	properties : Dictionary<Titanium.UI.ListItem>;
}

declare class RowActionType  {
	title : string;
	style : number;
	color : string;
}

declare class ListViewAnimationProperties  {
	animated : boolean;
	animationStyle : number;
	position : number;
}

declare class ListViewIndexEntry  {
	title : string;
	index : number;
}

declare class ListViewContentInsetOption  {
	animated : boolean;
	duration : number;
}

declare class ListViewMarkerProps  {
	sectionIndex : number;
	itemIndex : number;
}

declare class ListViewEdgeInsets  {
	top : number;
	left : number;
	right : number;
	bottom : number;
}

declare class hideParams  {
	animated : boolean;
}

declare class showParams  {
	animated : boolean;
	view : Titanium.UI.View;
	rect : Dimension;
}

declare class contentOffsetOption  {
	animated : boolean;
}

declare class zoomScaleOption  {
	animated : boolean;
}

declare class TabIconInsets  {
	top : number;
	left : number;
}

declare class TableViewAnimationProperties  {
	animated : boolean;
	animationStyle : number;
	position : number;
}

declare class TableViewIndexEntry  {
	title : string;
	index : number;
}

declare class TableViewContentInsetOption  {
	animated : boolean;
	duration : number;
}

declare class TableViewEdgeInsets  {
	top : number;
	left : number;
	right : number;
	bottom : number;
}

declare class textAreaSelectedParams  {
	location : number;
	length : number;
}

declare class textFieldSelectedParams  {
	location : number;
	length : number;
}

declare class Point  {
	x : number;
	y : number;
}

declare class Gradient  {
	type : string;
	startPoint : Point;
	endPoint : Point;
	startRadius : number;
	endRadius : number;
	colors : any;
	backfillStart : boolean;
	backfillEnd : boolean;
}

declare class GradientColorRef  {
	color : string;
	offset : number;
}

declare class Dimension  {
	height : number;
	width : number;
	x : number;
	y : number;
}

declare class AnimationOption  {
	animated : boolean;
}

declare class openWindowParams  {
	animated : boolean;
	bottom : any;
	fullscreen : boolean;
	height : any;
	left : any;
	modal : boolean;
	modalStyle : number;
	modalTransitionStyle : number;
	navBarHidden : boolean;
	right : any;
	top : any;
	transition : number;
	width : any;
	activityEnterAnimation : number;
	activityExitAnimation : number;
	activityExitTransition : number;
	activityEnterTransition : number;
	activityReturnTransition : number;
	activityReenterTransition : number;
	activitySharedElementExitTransition : number;
	activitySharedElementEnterTransition : number;
	activitySharedElementReturnTransition : number;
	activitySharedElementReenterTransition : number;
}

declare class windowToolbarParam  {
	translucent : boolean;
	animated : boolean;
	barColor : string;
	tintColor : string;
}

declare class closeWindowParams  {
	animated : boolean;
	activityEnterAnimation : number;
	activityExitAnimation : number;
}

declare class titleAttributesParams  {
	color : string;
	font : Font;
	shadow : shadowDict;
}

declare class shadowDict  {
	blurRadius : number;
	color : string;
	offset : Dictionary<Object>;
}

declare class ShortcutParams  {
	itemtype : string;
	title : string;
	subtitle : string;
	icon : any;
	userInfo : any;
}

declare class BoundaryIdentifier  {
	identifier : string;
	point1 : Point;
	point2 : Point;
}

declare class ReferenceInsets  {
	top : number;
	left : number;
	right : number;
	bottom : number;
}

declare class CoverFlowImageType  {
	image : any;
	width : number;
	height : number;
}

declare class DocumentViewerOptions  {
	animated : boolean;
	view : Titanium.UI.View;
}

declare class MenuPopupShowParams  {
	view : Titanium.UI.View;
	animated : boolean;
	arrowDirection : number;
}

declare class MenuPopupHideParams  {
	animated : boolean;
}

declare class animationOption  {
	animated : boolean;
}

declare class BarItemType  {
	title : string;
	image : any;
	width : number;
	enabled : boolean;
	accessibilityLabel : string;
}

declare class transitionAnimationParam  {
	duration : number;
	transitionFrom : Titanium.UI.Animation;
	tranistionTo : Titanium.UI.Animation;
}

declare class PopoverParams  {
	animated : boolean;
	rect : Dimension;
	view : Titanium.UI.View;
}

declare class hideStatusBarParams  {
	animated : boolean;
	animationStyle : number;
}

declare class showStatusBarParams  {
	animated : boolean;
	animationStyle : number;
}

declare class MessageReply  {
	message : Dictionary<Object>;
	success : boolean;
	error : string;
	code : number;
}

declare class YQLResponse extends ErrorResponse {
	message : string;
	data : any;
}

