using DNNDave.Modules.IonicToDo.Common;
using System;
using Xunit;

namespace UnitTests.Common
{
    public class GlobalsTests
    {
        [Fact]
        public void ModulePrefixIsValid()
        {
            var modulePrefix = Globals.ModulePrefix;
            Assert.Equal(expected: "IonicToDo_", modulePrefix);
        }
    }
}
