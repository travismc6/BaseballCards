﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BaseballCardsCore.Helpers
{
    public class NumberComparer : IComparer<string>
    {
        public int Compare(string x, string y)
        {


            int num1 = -1, num2 = -1;

            string suffix1="", suffix2="";

            Int32.TryParse(x, out num1);
            Int32.TryParse(y, out num2);

            if (num1 > 0 && num2 > 0)
            {
                if (num1 > num2)
                    return 1;
                else if (num2 > num1)
                    return -1;
                else
                    return 0;
            }

            else
            {
                //get number
                //get suffix

                //compare number first, then compare suffix
            }
            

            return 0;
        }
    }
}
