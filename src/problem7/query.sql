-- block_height > 730000
-- wallet (ie address) has at least $500 usd
-- 1 usdc == $0.000001
-- 1 swth == $0.00000005
-- 1 tmz == $0.003

SELECT address FROM (
    SELECT address, 
           SUM(CASE denom 
                            WHEN 'usdc' THEN amount*0.000001
                            WHEN 'swth' THEN amount*0.00000005
                            WHEN 'tmz' THEN amount*0.003
                    END) AS walletBalance
    FROM balances 
    GROUP BY address) tmp
WHERE walletBalance >= 500 AND address IN (SELECT DISTINCT address FROM trades WHERE block_height>730000)