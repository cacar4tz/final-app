let process = {
	menu:function(){
		let content = <ul><center><h1>
		"First Aid Guide"<br/>
		<a href='#' onClick={process.page1}>BLEEDING</a><br/>
		<a href='#' onClick={process.page2}>CLEANING & BANDAGING WOUNDS</a><br/>
		<a href='#' onClick={process.page3}>EYE INJURIES</a><br/>
		<a href='#' onClick={process.page4}>BURNS</a><br/>
		<a href='#' onClick={process.page5}>CHEMICAL BURNS</a><br/>
		<a href='#' onClick={process.page6}>SUNBURN</a><br/>
		<a href='#' onClick={process.page7}>UNCONSCIOUSNESS</a><br/>
		<a href='#' onClick={process.page8}>CHOKING</a><br/>
		<a href='#' onClick={process.page9}>INFANT CHOKING</a><br/>
		<a href='#' onClick={process.page10}>POISON</a><br/>
		</h1></center></ul>;
		ReactDOM.render(content,document.getElementById('root'));
	},
	page1:function(){
		let content = <div><center>

<h1>
BLEEDING
</h1>
		<h3>
		Before providing care, put on protective gloves or use a barrier<br/>
		 between you and the victim, to reduce the chance of disease transmission while <br/>
		 assisting the injured person. Cleanse your hands thoroughly with soap and water when finished.<br/>
<br/>
Basic first aid treatment:<br/>
<br/>
CALL 911 for medical assistance.<br/>
Keep victim lying down.<br/>
Apply direct pressure using a clean cloth or sterile dressing directly on the wound.<br/>
DO NOT take out any object that is lodged in a wound; see a doctor for help in removal.<br/>
If there are no signs of a fracture in the injured area, carefully elevate the wound above the victim s heart.<br/>
Once bleeding is controlled, keep victim warm by covering with a blanket, continuing to monitor for shock.<br/>

				<br/><a href='#' onClick={process.menu}>back</a><br/>
			</h3></center></div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page2:function(){
		let content = <div><center>
		<h1>
CLEANING & BANDAGING WOUNDS
		</h1>

		<h3>
Wash your hands and cleanse the injured area with clean soap and water, then blot dry.<br/>
Apply antibiotic ointment to minor wound and cover with a sterile gauze dressing or bandage that is slightly larger than the actual wound.<br/>
		</h3>

				<br/><a href='#' onClick={process.menu}>back</a>
			</center></div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page3:function(){
		let content = <div><center>
				
				<h1>
EYE INJURIES
		</h1>

		<h3>
If an object is impaled in the eye, CALL 911 and DO NOT remove the object.<br/>
Cover both eyes with sterile dressings or eye cups to immobilize.<br/>
Covering both eyes will minimize the movement of the injured eye.<br/>
DO NOT rub or apply pressure, ice, or raw meat to the injured eye.<br/>
If the injury is a black eye, you may apply ice to cheek and area around eye, but not directly on the eyeball itself.<br/>
		</h3><br/><a href='#' onClick={process.menu}>back</a>
			</center></div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page4:function(){
	let content = <div><center>
				
				<h1>
BURNS
		</h1>

		<h3>
First Degree Burn: Skin will appear red and may be swollen or painful. Generally does not require medical attention.<br/>
<br/>
Second Degree Burn: Skin will appear red, blistered and swollen. May require medical attention.<br/>
<br/>
Third Degree Burn: Skin will be visibly charred and may be white. Usually very painful. REQUIRES MEDICAL ATTENTION.<br/>
<br/>
Basic first aid treatment for 1st degree & some 2nd degree burns:<br/>
<br/>
Submerge burn area immediately in cool water until pain stops. If affected area is large,<br/>
 cover with cool wet cloths. Do not break blisters if they are present. If pain persists but<br/>
  no medical assistance is needed, apply medicated first aid cream or gel and cover with sterile dressing.<br/>
   If medical attention is needed, do not apply any cream. Just cover with a dry, sterile dressing and seek <br/>
   medical help immediately. basic first aid treatment for 3rd degree & some 2nd degree burns: CALL 911!!<br/>
    Third degree burns MUST RECEIVE MEDICAL ATTENTION IMMEDIATELY! DO NOT try to remove any clothing stuck <br/>
    to the burned area. Cover with sterile dressing or clean sheet. DO NOT apply any creams or gels.<br/>
		</h3><br/><a href='#' onClick={process.menu}>back</a>
			</center></div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page5:function(){
	let content = <div><center>
				
				<h1>
CHEMICAL BURNS
		</h1>

		<h3>
Flush the affected area with cool running water for at least 15 minutes.<br/>
Remove all clothing and jewelry that has been contaminated.<br/>
Monitor victim for shock and seek medical assistance.<br/>
If chemical burn is in the eyes, flush continuously with water and seek medical attention immediately.<br/>
		</h3><br/><a href='#' onClick={process.menu}>back</a>
			</center></div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page6:function(){
	let content = <div><center>
				
				<h1>
SUNBURN
		</h1>

		<h3>
Avoid any further exposure to direct sunlight.<br/>
Drink plenty of water to prevent dehydration.<br/>
Do not apply cold water or ice to a severe burn.<br/>
Use over-the-counter remedies to remove discomfort.<br/>
If burn is severe and blisters develop, seek medical attention.<br/>
		</h3><br/><a href='#' onClick={process.menu}>back</a>
			</center></div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page7:function(){
	let content = <div><center>
				
				<h1>
UNCONSCIOUSNESS
		</h1>

		<h3>
Do not leave an unconscious victim alone except to call 911 for medical help.<br/>
Assess victim’s state of awareness by asking if they are OK.<br/>
Check the victim’s Airway, Breathing, and Circulation (ABC’s).<br/>
If the victim’s ABC’s are not present, perform CPR. IMPORTANT: only a trained & qualified person should administer CPR.<br/>
If ABC’s are present and spinal injury is not suspected, place victim on their side with their chin toward the ground to allow for secretion drainage.<br/>
Cover the victim with blanket to keep warm and prevent shock. If victim communicates feeling warm, remove blanket.<br/>
		</h3><br/><a href='#' onClick={process.menu}>back</a>
			</center></div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page8:function(){
	let content = <div><center>
				
				<h1>
CHOKING
		</h1>

		<h3>
Ask the victim, "Are you OK?"<br/>
do not interfere or give first aid if the victim can speak, breathe, or cough.<br/>
If the victim cannot speak, breathe, or cough, ask for someone to call 911 and then perform the Heimlich maneuver (abdominal thrust).<br/>
How to perform the Heimlich maneuver: Position yourself behind the victim with your arms around victim’s stomach. Place the thumb-side of your fist above the victim’s navel and below the lower end of the breastbone. Take hold of your fist with your free hand and pull fist upward and in, quickly and firmly. Continue with thrusts until the object is dislodged or airway is clear.<br/>
		</h3><br/><a href='#' onClick={process.menu}>back</a>
			</center></div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page9:function(){
	let content = <div><center>
				
				<h1>
INFANT CHOKING
		</h1>

		<h3>
Place infant face down on your forearm supporting the head and neck with your hand. Rest your hand on your knee with the infant’s head lower than it’s body.<br/>
With the heel of your hand give four blows between the infant’s shoulder blades.<br/>
Turn infant over, place two fingers on the center of the infant’s chest (just below the nipples) and perform up to five chest thrusts.<br/>
Repeat until obstruction is clear.<br/>
seek medical attention after any choking incident, since complications may arise.<br/>
		</h3><br/><a href='#' onClick={process.menu}>back</a>
			</center></div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page10:function(){
	let content = <div><center>
				
				<h1>
POISON
		</h1>

		<h3>
Call your local Poison Control Center or 911 for immediate medical attention.<br/>
Antidotes on labels may be wrong!! do not follow them unless instructed by a physician.<br/>
never give anything by mouth (milk, water, Ipecac, etc.) until you have consulted with a medical professional.<br/>
Keep a one ounce bottle of Ipecac on hand at all times in case of an emergency, and give only when instructed by a physician.<br/>
If the poison is on the skin, flush skin with water for 15 minutes, then wash and rinse with soap and water.<br/>
If poison is in the eye, flush with lukewarm water for 15 minutes. Adults can stand under the shower with eyes open. always consult medical professionals after any eye injury has occurred.<br/>

		</h3><br/><a href='#' onClick={process.menu}>back</a>
			</center></div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	loading:function(){
		let content = <div><h1>
					please wait......
				</h1></div>;
		ReactDOM.render(content,document.getElementById('root'));
	}
}

process.loading();
setTimeout(function(){
	process.menu();
},5000);