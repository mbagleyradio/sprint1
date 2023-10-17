import './NoInsurance.css';

function NoInsurance() {
    return (
    <div id="noInsurance">
        <div class="checkbox-container">
			<input type="checkbox" id="cb1"/>
			<label for="cb1">No cost for eligible uninsured</label>
		</div>
		<div class="checkbox-container">
			<input type="checkbox" id="cb2"/>
			<label for="cb2">Uninsured sliding fee</label>
		</div>
		<div class="checkbox-container">
			<input type="checkbox" id="cb3"/>
			<label for="cb3">Uninsured discount</label>
		</div>
        <div class="checkbox-container">
			<input type="checkbox" id="cb4"/>
			<label for="cb4">Payment plans</label>
		</div>
        <div class="checkbox-container">
			<input type="checkbox" id="cb5"/>
			<label for="cb5">F.A.P discount (financial assistance program)</label>
		</div>
        <div class="checkbox-container">
			<input type="checkbox" id="cb6"/>
			<label for="cb6">Catastrophic care discount</label>
		</div>
        <div class="checkbox-container">
			<input type="checkbox" id="cb7"/>
			<label for="cb7">Care credit card</label>
		</div>
        <div class="checkbox-container">
			<input type="checkbox" id="cb8"/>
			<label for="cb8">Self-pay</label>
		</div>
    </div>
    );
}

export default NoInsurance;