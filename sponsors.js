function submit(){
    if (document.getElementById("education").checked == true && document.getElementById("low").checked) {
        document.getElementById("p3").innerHTML = "Netflix";
        document.getElementById("p4").src = "https://cdn.glitch.com/f8d173a9-ef09-43f5-bbb1-f179a5ed06ae%2FWebp.net-resizeimage.jpg?v=1563668779834";
  } else if (document.getElementById("education").checked == true && document.getElementById("med").checked) {
      document.getElementById("p3").innerHTML = "iD Tech";
      document.getElementById("p4").src = "https://cdn.glitch.com/f8d173a9-ef09-43f5-bbb1-f179a5ed06ae%2Fidtech.png?v=1563666879203";
  } else if (document.getElementById("education").checked == true && document.getElementById("high").checked) {
      document.getElementById("p3").innerHTML = "Balsamiq";
      document.getElementById("p4").src = "https://media.balsamiq.com/files/company/balsamiq-logo-print.png";
  } else if (document.getElementById("education").checked == true && document.getElementById("v high").checked) {
      document.getElementById("p3").innerHTML = "Digital Ocean";
      document.getElementById("p4").src = "https://assets.pcmag.com/media/images/514101-digitalocean-logo.jpg?width=333&height=245";
  } else if (document.getElementById("tech").checked == true && document.getElementById("low").checked) {
      document.getElementById("p3").innerHTML = "Wolfram Language";
      document.getElementById("p4").src = "https://cdn.glitch.com/f8d173a9-ef09-43f5-bbb1-f179a5ed06ae%2Fwolfram.png?v=1563667767272";
  } else if (document.getElementById("tech").checked == true && document.getElementById("med").checked) {
      document.getElementById("p3").innerHTML = "She++";
      document.getElementById("p4").src = "https://i.vimeocdn.com/video/435519601_1280x720.jpg";
  } else if (document.getElementById("tech").checked == true && document.getElementById("high").checked) {
      document.getElementById("p3").innerHTML = "AoPs";
      document.getElementById("p4").src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAX0AAACECAMAAABLTQsGAAAA8FBMVEX///8bNl1hrQDF3G8UMloAJVMAJ1TD22lAVXXg4+hXqQDE22sJL1rq7O8AH1BcqwAAG07W5p0AKlZ6h5wAAEXJ3nf7/fbx8/Xg7LeutsKjq7gAIlHU1twQMl1vfJKssbz0+eLa6aY4TnDEydEAFkyWn68AAEYAAD7V2eCNl6jt9NUgPGLd6q8ADUm5v8otRWlaaoRytSm115XA2V+DjqH2+vCFvkzc7Mzp8szS576lzn51gZdLXXrJ4bGey3Pk8NeQxF7W6MPN4YXS5JLl78F7uTpjcYpTZH++3KOr0oaJwFOUxmWgzHe72pwAADoAADNRoiHzAAAZyUlEQVR4nO2dC7eauNqAYW9AUWBbsFLBrVakxVrRduv0om1netF2Luf7///mSwKBJAQEtMd1pr5rnTPdKpA8hDfvLUEQrvI/JG9+9C7dhF9Wxn+1WjcfLt2KX1N6r2/ubm5uWt/+uHRLfkH58Kp1g+Su9denSzfmF5M3v8XsEf+bH5tLN+gXEqDw725Iad18v3SbfhXp/bij2SP+r67q/78hH25aGfZI/f85vnTT/vXSe8VlH/F/fenW/bulNxY2rM5PdT8w/ceXbuG/WN69agHn9tM3zvC/uwPfjH9v/Xm1Pn+OfPqzFY/wD6z6uWv9Po5m47vW+6v1eX7ZvI81Tuu3NwD0Dal+kL+LZ+Or9Xl++Z5aOsC53ZAmP8JNul/X4MN55Q9a1d/dAOvmTfQZUjWbj9RUDO7P+NJN/tfI+PeMe9V69S56HtA0+/qG/f7u5hp7Po/wXFswvH/7JPTe3/yBLKHs9zfX2PM5JMe1hfw/QuuGa3/G6v/NpRv/vy69jznOFdQ+kO73vLtz07q7+r6nyKdvf46F8Z9c/q1XyLX1gGbKaH30aED368NV/dcVaMgAi6bHWjyILbR63j5+KsirQBh/zMwMd3fA6oFW0VX915LeP9GQRvi+0xPr3d3fwOL/0mi8FOaavNahtU9bnMAjw1Yo/Hdd0Qmxz9g5vUDs8heyg9CZrS1rvZ45YXDGFhKGDHJuCaPyDlqZm6eN9i2kL4rK3KENH6iUiAPu7j7WDD7o5n0i2u5sfROEpnafJ/Nlc2+F6vFzBP5+aciKaZoa+J/iGtpkNRuc4w58onQ9wDdOHarWN2DqP7lt3N7G9EVJbgL1/088/QKl1GMiQeijGuLIYiKSUYJIWWlKYp5IkqSZrrbzCy9nj5quoknsoaa7XAcntm3zntXjSM1/+q0VhxXePobsE/qQ/16NIkHIDv30GztRI++ssuzI7pmzE7tFSAF9TFLRhrn8bX8p55xBMs3V4JSmcW1IZOK8u4ER5vFnoHRo+qKoQTjj35EPlp2EY3VVUdQO1a/lKZ2i5Th9eLtNn3+0l8s+RrGtrX/+yEtetb4BfBuh9wizp+iDxop9lF35h2uAQv5/V1T/M5PqleHV7VNGStEXRbmpcw5eG8eONqWaTX3Tys0ctlpjoPAbjdtbLn1RdJtA573P9c6AJVStLXO6l6ZVr0scKUkfDOOsFjnIx48Tp+s6zbKFXkbpx+yg59rbPNze5tIXzT04QVbpxzfv1R9CpbnX6zBdkuv0iCtl6QP1z47ilVLqQHdVQ/v4B1X49HsWH7Iax59f9BpF9LWhMBzq3LBb6+YfQfh6WwX/VmN7FFbvEF9K0xclkZ57rTIjHx4n17B9nI4yszPObRTQfPTwcJy+ZcC56h9m4o7cs88Plei7bI+0VfUO8aU8fZH2M/pGSfgclXVcHAU4TyPG7kH2DrTwGyXom6I8CYXN34T+itwzNFtXoB9m6IvTc3mTFeiLMqHC9ftyB9aDD+mLkrvzCJsfuUpvPyPvqhR9cIJVQDhshHtWhf4h21HFqdMnjlShLxqpDtmax38O4Wv1TH4HzSnIeYrUP/Kexl8iK7MkffAPbW3H6p9yzyrQtznPuDSp1amsVKKfKjyVnYnOCz+mD6wXbYayuUjhP028q7L0wQlg8Of7XQtmfVP3rAJ9h2dbuGeKNlSiL3bwVdfZoS9pChTTlIiP6jomSZ8lZQksjO9A4X9tJ8Q59KlYB0EfPD8ToL9+kDevEv0JD9C5og0sfcnEkgnewKvGmt/OtEky7i3HGY0cf30wXC0+V22vkBhxQP0DhTd+THpXFP32w+eNEN4TY5SkD5u20qmbV4V+wDWrpXndjtHC0JdWayuS9cjS3Ax/M24Ta22aExK0t+pIJ8Gnn3eto48f2rc59BuPXwgb8Gz4ZgKcpg9PIDyh3LPy9Gf8+U0u1zVbHXhBgZZi6MuUI+E12WsbkR73mRFhbpnTBhOlvtoRWG2r6WMSPkm/cftVEF63YOZcHyoSn76oCU8a9egv+ZpZYzuclcA5yNOO4Rqd6f1wxAvUZOn36a9XDP7Y1hrSk650yJ7YKjk8+FKSfrv9tBfZNKhwarCLgn7no+/l+PPSvNjkV9fzjpKgBVNip+lwjjhCn1Xw2h59vKM/zQQhUANKdpArpei3G1/GqT2P/IH+Ujkr/VzDWi6KNuiWYmYmRnme9RKO0Gc9vSi4zd4TqWRfyksZ+o3PL2hfFvrC9kzRzkffzlE8yTDkN/6ee8+Q9UXLMfo2E1510Yc0fekS9JHCZxIwKJSg7g3lXPTD3FiWJPI1OYCzyhor+CDWUj1Gn3W0O+gCzJDQzpnnR3KU/sNTfoUJjIF6k/2Z6O/zncq8aIM6KYoCuEPqx0fpr+gfGBA0q3nMc8U9EjlKfwzTh9zqKhhC9gSL4laTvi4VZL05lgY8ZFkcBZCpw47Sb/LGPusl1A0o5Io3JUfQPU2/0RgLvb/zKwtv3oHbNyUpMPQfPpdrhVMURFe4ZsXuWAiGDFUepa8yJhfS++wDAfCfe/TbQzftB0W/3XgJf/Auv6r2L5i31Un1S9Fv3L4t2QhG69JPAjfaMMuGo1npEFPvMfqMrxdH94aZO6yYw5GXNxFVl8AWgkOSsSfoAytzI2w2dsCr1o/iyG9gUh08jN4kOQFBv9F+Ar4vpXlUeuhLS+puSM3sbJeJAXCEjFIcoe8xp4t9PF7gT5PdjjEZ+v1z1FH5JmhIiPEl9NvQyhSePLzQu5bOWzSK6g1fPP4iDOfAIHfmsceT0G83Hm1ggqUUfWbkmf6I6raRVbfZUckRJS0QKabvsWeLvx/k3WNJM2Wjsxw6J4ZgHRmmVgRfNEn6jcdfUYy+8UKXTclhNsmIV6qMvzw0HgmW0lkFgr3WTII+uHlgxnjSbpSbddkpT6ULe7K1DepxvQMZLe2cKyiOnVZxesOM5dqJlEu+FxLfA+BZF5fAHaOviJK7V6HXqGH6jfbLXpRgAfTh95OQWjSKtojpvQTftx9Bi1NzwfOh7uHzE9FvPH6LEyxl6A/ovArUGLStl4k2ZEJykukacsbtTWMwmfh+Usa5FI3McyQ148Oso6ktSVGG9UsJkWozYWYqWBkSpB/pjChGj+ij0HEgbPCCIrRC8StiG9GHhVU+DBW6kobqf56k9W9l6DM5DDjL0ngztQ1s3F2e+F4QrkUGVhqiq5ZdcbFiCsokFk1tVncKiCcWlFkPJ4Y+fgA6AydlMX1YZQSGN1o0ihKHL2K2mL6IMuvCSDSElw9PN3FGvSR9W2QUDxhLAaV62GiDyhT+GLGC1/dc06Uqfek+udK+DH5RmdRUP3haj8qSfXv8lUjKpvTj4f3mFVxcsfmC2ab0wQkOUP0Lb8HNe5kmWErQ50a4aI0r04OrT8+G6byQUdSYSiX6cmrV6xltxhVJq6d9UqNKkleorURSlqQP7jBMPY6pxCFBH9piUTHp21vC4SpBn4kyROY9rY3kEXUEo/aV9N70aRvRxdZSFfpU9W44LXeMUssJIE1azVjDEirC24U2D3EJY6cKX8m6Too+PIFP3bxS9G1GjXTQMPKomViiV1LQ94vUSzZ9JxV816rQpw3c/rTUofXWelAOhSTrYzqLTtEHDRsJtyRbhj74QfU4D+PSxLrapmonxCmlWOlJlwrDTfhucgX6LlNG7hVWjyfSqVP1eCzKRtNX+sLj2yL6NaJsDBgMjC7qpCvr6WnaJYP5tBuWGD3l6SuZVKbaVEocXWu1wcXpq4xixYVkbF0heQztH3TI54KeEhKlVJq+TEemI+lPSoz/Ognei9P3GSMROzo6PcApZUzfMIOc8EZUe5OqtJL0JZlfP2T3d4pyJLhRZ7XBxemzfUi6T0+tZN90ep6WSfp0kkyqRl+e5AfwVX8/N1xTy81E1FE9l6bPRBmIClbWqM+lb5LOAE3/HqdYStCXFOVI4Zythr51WMKYBqcATtSqu1yXpm/lKB4w2O6pb4jaBoa+kk8/sVSP0ZfMznxWzmS37UF/ZjU7GUVUQ/E71Nhj6T+80Ckdy9JvPBK29O2j6bfbx+hLfIsHCp1yIVZSVNA8efSjUthY3E5n51dNGqpDNs5ao9xdR7WIWOjMYvvhUU/wDWJ0QvrED2BMKGiSK/po+o3G1yOXZ9MaimcnwszHWgLZPpm+NnRS6ZdZqM4Rn2l7rYrfAWFOkfTbjc8bYfwOph6T76mxjxKHH3pCOE/tYZJ+u/H06MVXmaVanUTY6r4k2mAX2Dzl6Gez6nVkx97Symfow9DkHMeSCPooRv8D1fMHO3x/CPpwxwyU84V1tRomldJHmcne02LNU1TLwAoxJdD0OyT9fimb5zz0GS+9qO4r7wzd3UCwZzG+hH7j9km8SxXaBC9cRsM7oY+SAGgngRt4f/StqVH048zkMb0/yqne5EoaR6TtJIOMLzJWRI63dR76A1rz11jj5yiSO1ThHCKl9FHN7CecTEQR/Sj1GNNHicMNLjVBa42CFXo+Yvo4M9k+YvPsyg99Mk1LW0NU7oWOjSbK4KfQ9xj6NcY+GCvm/cwWvB3gj+ijmllqy0eYzdK3wNmL6COlRNYW3sHCKpSaR/SjzGQU6yykX3JZVCxproSO4lMxILoER8M1PSfRz/sxaxZU1/voSZWUJZjS+ksZ0G8gncEUkaCNfwcH1wX0G+0n2dpCuEzR9u9NlFl8RCS3CumzqxOOiIKtQsYWJXtNV8MmRuAp9K3FkJ853OVbyyUl1pOS2/SA+ncB/a/cLR9RFUM4d4Q2YMupLUR1tbo1FV4+fiH0XiYJlkL61bKtabSBcdGI6lZmGUAS/jyBvuXCFYEc/szQL65150u6ag6mtlR708vbdwFaN7YqjPmvooB1te97QgA3LflKLP0qop9bLpMjSYUIY2wQdTsHWpdpOZnFCvS3ULkD5cBWjtgz9sE1q2cXiY5oimWfYUfIF4/J5FYR/eP1GozgoewxwSEX95vN1CQFPbXpb+MRIpnmZB0G8fnUcChlilpOjbKZ8Bku3g11U7QbKrw7T6hld0X0j9QqcQRreJt9aDoWHJkeu5dLaoXUpb8lE6um7LquLM418P/ZMNs5IszqoGgnYED+R+FOwG8rRNnYEVxC7mPHKlPubxrT6TRTkpZCrkl/y6mZyxsytfYooenbg2dDPfuCp2ifNWSFIsi8XbBfQyvzoQL9UrWYTA/jaEO/XCWhmFdJWJK+Veoy8cXqpNVZ+oFpmtm6TbRSAit8+BBQy7jilSzQymyXp69nx29WmO7jyEE5pUXoglr0q8CPSzFOph/XpZF1m3CzHcLCB9bNhtpDEu1/iurfKtAfZUKEwSArDAC8b8OoBBjJTANAdehXgq9Ud7Vy6EPrMxB6r6PhjSx5Rheh4ANW/2g3n2hHmSr02Q1hptzkBrN8JDEujy5doUtDatC3qkxLNTdT4dKPd3yJ6jbhxppZPY/WTsAdqSKFj2sLy9NXmc4RIUxSRtxqH3D40eioSS7cqkE/LFdEGDVLqpciyKEf7/jy5tvd9xwbB60b2vwNrVCitrA8fTbKkJMZonNrQL3iaMOxIid6kXsdzePdlzULJKXmcrr+gmzXfUof+nfAucl1fdGmhT1g/wtfibpNhn7jcS59dt7kK55ssVWyFi7MXa2LfjdXC85SbtZVm+WccXNeu4KfygyS9NGGX7rQy4MP9+v8zuwoQ9OPl93xL8tUb+Yonmy9j5aeIuNupmIc6MBMTXt/1jmufSRjf8oKrn6S2mLoo2V/dt5mtcD1hUP/KaVpCPoouZUr7K5PuSlptlafjOYPczaJNTNnq+vrBrvCJwwaVvcn5grsmabx6cue3nH4e/3CfYI3X77k0keB6nxhQ1Sd3GmLv31IJF4zq/0l0xxmtFj9KJu30/LLOCVFrL1uJZVo0RWPvi27cMMvdp9rZGW+bDQe5dBHmzsUSFjO4oHCrtGid4n0DiYJR9JkkbeO6pT4vjqbwP3D2FsALnW/40WeawhcdMWlr0DFFtBzb7RnJFD4bT59lJkslJWiUWLk7P4NZDClf9qhV1IIgX+Yy4asKIpsmJNVnzt7T0z6HBW1ReAMm/AicrKbm3s/GfbP+IIAZ67w6cNVKcD6J95q/3EcW/hc+igzeURUVgrGEPvTLF5dHfQd3wmD3NNUuFyegIuEjh/t5zZzvDqnKDz9Wjb59CPrP363B/SzcOKQR/+hWOFfJU+ClZ5DH8wvTQ86vyjEiZc0cuk/ub7yqbYMKAs3pQ/5r1ThzY8eTF4lsBn67YdLt/9/XByybpOkD9W/ZQsbclUcQx/uGXmVk8TepsMfWpykJjLWwi011kn6jfaxmtmrlJB0yxiWvjnL1O9j+u3GMSvzKiUF122Wpl/GyrxKWbGjus2y9FFt4VXOJ/oWqJ9y9NGmJFc5rwx2hlGGPqzbvMr5pW8ep/8I7ihzlZ8htq4bRfQbj2Dd5lV+ltg7MoPB0D++Ku4qJ0o4TzMYFH20pPE0sUe1MqL+ikjm9UdIHH5oORWPiiqrtSLznjWZz1fc8HSQSc4NTt2xMBInWRRH0Eerh06VsFvnfWbiVEy36LTn4hKJ2S0uaLKoIof+f6pvZ6Qvu831yNkbvN1gRt3M1n3/d55X5dlWvCgupX8eC3+/5L/PzCta9u1PyWFmz5Mt7PaTovFsLSn6GVjHRYrfJGpb3eyoHnXYE6pn27RWXSHnF9NHSxpPF13pN7nZ9El+ohFg1Mi/bOJdB6uiIu6T6fvTZCxzVEqW/jnFg4t2I/rtc1n4o4Xd56452PH3HY/Eog4h6Q8WBQROpj8Ri779ufTB+ZcypH/GkM5uJdich/gYfapmkqSvKwWa9mT6ZtED+dPpC/YMRpjPF9JR4aN8SFb6wdbrOurDbifYTGf0WIna+nBCfknRN0f0eWA2Fn8J6dvJnwR9vaR6XnIeUzvJMiP6RLME8i+VehuVqlJflhY1FM4Y0pnBnXVCrMXDezucmK60FvaSpM2pdaD2bKmYTTS9zhaaNJeW6ZYZBP1gAaZFqyn4Szl69U3YNOX5OvotoD+bu8oyqp5I6PtLw5hb0R+HkeA05/M9pOPs5ss9VZ5pZWqOdGuuaM3oeYP0VQ1bAKE5EDz04gC9qXvN6cI9JG8PnMPG6cuzLNg+QSZokuzG9k3f2Br+ILCMQFUna2q06HPZ90KrGxVSWUs1SN0Ekr7vAorb5VB0Am8I/j18Ngw9595Ep7Imh/lo4K27qBIU01+JfVsPxehuTre7vReE28XAXi77gee75BJce8psRR9oouOFwy7qBhr7TWxA78GD5j1H9LszZTYI+s34LfGrhe95jrKXzv4akWoy6KKhNYwHed+NKMEeNunynkNkqnvP0Me5en8whd9v5cjwtAHhaFhOkMpYK5HiD9FlY/p+tLjIXiJsSkzbkXbROiB1Spq+6ny6Jq3I2DIL0WUQfX8Rb17eASfy0JSmd+KVpCt0ee85+kuX3AvTj6dBL97mt79Iy6Ro+gP8eKzRXWDprwcekIG3jdytbbJrhhgXHQbo+DU2GA/wZxH9xFnwnkFSLtbsE7z/55qeafs749lCG0YKKezGF9rDW4Xoo7pL+Ac8Pqb/LH5+1OchvrjAOi3/fbHv42bFa7z7C2KhD0V/nSyZQAOHob90F0imMcktRqh2sQU0h3tsrrFRMoN3PaKvJobKBMLoYH9hL8f/8LqZZgfhKlKBQ3xnBl0d2zyr6Jk57ISE/vMB7i9UedgqCy5MP1zg8RWZl33CWKfp7/EGpTramp2lP4zWe+ERn9APp8lH8Igk0hDCDX0i+iG2Qu0mBN/Ban6GTftBhj6UAL3ucpc0Sx5g+mFEvAvRYvp4AptsoSqL26Se7bXZ9WSPbXrVQO0roI9XTOgL2GRW8zCbUxD0cb+HiD4m7aX0HSWKES3nC6gRUvp4D/js2I8+hiNngp8UG0YgIvq25KPT6kIe/fgBV8//8q4qYndW8b5ofrTjegF9DEXt1qN/yKUve3ihJPxtafoCNG159KMbPVlFx2bpIyWFunJZ+o5rupHIJlKWBfRxNwddjuYpoI81zwFq6FTzuKnmoUMT5ekroCE73Cx9mmgecEAAFI8X/ZNDf4E1j3xR+ruJjjcfjJqUT3+GdZTT5cy6ufTV59hcvIec1nj/NnLW7VLB1PL04amHu+RHehppAM3xtfhGcDSPEc+6g8Ul6atdAtoS/pukPyHfEwdc2LgDhyXP4syjL8xji9OjLU40W4bPojcpUjmBYvpE/sSHj1WIQ1SrxOKEh2qCaMXHZukL+IKzi9o8vkH4sms0Ggn6S3rTg0M0+B2k9svTD7uRDbpEB6zl2NtCT5oXuXpO/BP9AD8spr/v4jHhLJBij72tyKnzYusfmJKLQXwsh34YGaDqZb0tk+TrwQeZpD/qbj3i7tjivROGq+fRuClNX9g+34eh77o40qA5Xmg9jxiK8xC+Lc56vuoPwnUXrXGcZuk/J85sPZvunf7IkrqxJ6woTthfxSc0lx56/VzTjd9xx9JfIgv1sJh5nj8dXjLS4C3IWLANG9Yn01yOtqB2+PPFjjGJD6H9T3uZT1/wmp0Ofh/TemL7ZqeDAxP2oYPmhbBpdNAL34BM8eCe4ZcEUvQFfb10DVc64Lbbaw0cG/+l7zpoXI8MB/eRom9H9IFq6nQmnn5Zm+eYsBFm9u96p6H+tJn/8q7BfmKzJyz6cc7Z4T8ubHH+4nJhi/MXF697noKHq1SSWP2s5Hqa9CqniD+Bhqltda+K5wKiHp41Vwdpmr86/Co/UwLf2jrnezn4VWrK/wNaQd5q9n3pUgAAAABJRU5ErkJggg==";
  } else if (document.getElementById("tech").checked == true && document.getElementById(" v high").checked) {
      document.getElementById("p3").innerHTML = "Sketch";
      document.getElementById("p4").src = "https://cdn.glitch.com/f8d173a9-ef09-43f5-bbb1-f179a5ed06ae%2Fsketch.svg?v=1563667864473";
  } else if (document.getElementById("pa").checked == true && document.getElementById("low").checked) {
      document.getElementById("p3").innerHTML = "Digital Ocean";
      document.getElementById("p4").src = "https://assets.pcmag.com/media/images/514101-digitalocean-logo.jpg?width=333&height=245";
  } else if (document.getElementById("pa").checked == true && document.getElementById("med").checked) {
      document.getElementById("p3").innerHTML = "Netflix";
      document.getElementById("p4").src = "https://cdn.glitch.com/f8d173a9-ef09-43f5-bbb1-f179a5ed06ae%2Fnetflix.png?v=1563666783242";
  } else if (document.getElementById("pa").checked == true && document.getElementById("high").checked) {
      document.getElementById("p3").innerHTML = "id Tech";
      document.getElementById("p4").src = "https://cdn.glitch.com/f8d173a9-ef09-43f5-bbb1-f179a5ed06ae%2Fidtech.png?v=1563666879203";
  } else if (document.getElementById("pa").checked == true && document.getElementById("v high").checked) {
      document.getElementById("p3").innerHTML = "Wolfram Language";
      document.getElementById("p4").src = "https://cdn.glitch.com/f8d173a9-ef09-43f5-bbb1-f179a5ed06ae%2Fwolfram.png?v=1563667767272";
  } else if (document.getElementById("environment").checked == true && document.getElementById("low").checked) {
      document.getElementById("p3").innerHTML = "She++";
      document.getElementById("p4").src = "https://i.vimeocdn.com/video/435519601_1280x720.jpg";
  } else if (document.getElementById("environment").checked == true && document.getElementById("med").checked) {
      document.getElementById("p3").innerHTML = "AoPs";
      document.getElementById("p4").src = "data:image/png;base64,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";
  } else if (document.getElementById("environment").checked == true && document.getElementById("high").checked) {
      document.getElementById("p3").innerHTML = "Balsamiq";
      document.getElementById("p4").src = "https://media.balsamiq.com/files/company/balsamiq-logo-print.png";
  } else if (document.getElementById("environment").checked == true && document.getElementById("v high").checked) {
      document.getElementById("p3").innerHTML = "Netflix";
      document.getElementById("p4").src = "https://cdn.glitch.com/f8d173a9-ef09-43f5-bbb1-f179a5ed06ae%2Fnetflix.png?v=1563666783242";
  }
}