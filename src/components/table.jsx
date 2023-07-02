import '../css/sizetable.css'

function SizeTable() {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Size</th>
            <th>Bust (Inch)</th>
            <th>Waist (Inch)</th>
            <th>Hip (Inch)</th>
          </tr>
          <tr>
            <td>8</td>
            <td>34</td>
            <td>27</td>
            <td>38</td>
          </tr>
          <tr  className='colored'>
            <td>10</td>
            <td>36</td>
            <td>29</td>
            <td>40</td>
          </tr>
          <tr>
            <td>12</td>
            <td>38</td>
            <td>31</td>
            <td>43</td>
          </tr>
          <tr  className='colored'>
            <td>14</td>
            <td>41</td>
            <td>33</td>
            <td>45</td>
          </tr>
          <tr>
            <td>16</td>
            <td>43</td>
            <td>36</td>
            <td>48</td>
          </tr>
          <tr  className='colored'>
            <td>18</td>
            <td>45</td>
            <td>39</td>
            <td>51</td>
          </tr>
          <tr>
            <td>20</td>
            <td>47</td>
            <td>41</td>
            <td>54</td>
          </tr>
          <tr  className='colored'>
            <td>22</td>
            <td>49</td>
            <td>43</td>
            <td>55</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SizeTable;
