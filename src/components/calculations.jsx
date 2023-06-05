import '../css/calculations.css'

function Calculation ({price , symbol}){
    return (
        <div className="specsTable">
           <table> 

             <tbody>
                <tr>
                    <td>Sub Total</td>
                    <td>{symbol}{+price.toFixed(2)}</td>
                </tr>
                <tr>
                    <td>Tax(10%)</td>
                    <td>{symbol}10.00</td>
                </tr>
                <tr>
                    <td>Coupon Discount</td>
                    <td>-{symbol}00.00</td>
                </tr>
                <tr>
                    <td>Shipping Cost</td>
                    <td>-{symbol}0.00</td>
                </tr>
                <br /><hr style={{width:'100%'}} />
                <tr>
                    <td>Total</td>
                    <td>{symbol}{+price.toFixed(2)}</td>
                </tr>
                
             </tbody>

           </table>
        </div>
    )
}

export default Calculation