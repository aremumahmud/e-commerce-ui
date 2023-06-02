import '../css/calculations.css'

function Calculation ({price}){
    return (
        <div className="specsTable">
           <table> 

             <tbody>
                <tr>
                    <td>Sub Total</td>
                    <td>N{price}.00</td>
                </tr>
                <tr>
                    <td>Tax(10%)</td>
                    <td>N10.00</td>
                </tr>
                <tr>
                    <td>Coupon Discount</td>
                    <td>-N00.00</td>
                </tr>
                <tr>
                    <td>Shipping Cost</td>
                    <td>-N0.00</td>
                </tr>
                <br /><hr style={{width:'100%'}} />
                <tr>
                    <td>Total</td>
                    <td>N{price+10}.00</td>
                </tr>
                
             </tbody>

           </table>
        </div>
    )
}

export default Calculation