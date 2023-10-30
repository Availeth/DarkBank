import React from 'react'

const Coins = ({ image, name, price, volume, pricechange, marketcap }) => {
  return (
    <>
      <div className="my-40">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="text-white">
              <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>{name}</th>
                <td>{image}</td>
                <td className="coin-price">${price}</td>
                <td>{volume}</td>
                    {pricechange<0 ? (
                        <td className="coin-percent red">{pricechange.toFixed(2)}%</td>
                    ):(
                        <td className="coin-percent green">{pricechange.toFixed(2)}%</td>
                    )
                }
                <td className="coin-marketcap">
                    Mkt Cap: $.{marketcap.toLocaleString()}
                </td>

              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Coins