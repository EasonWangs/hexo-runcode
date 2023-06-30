const path = require("path");
const fs = require("hexo-fs");
let guid = require('./lib/guid.js');

hexo.extend.filter.register('before_generate', function(){
  console.log("hexo-runcode");
});

const style = fs.readFileSync(path.resolve(__dirname, "./assets/runcode.css"), { encoding: "utf8" });
const script = fs.readFileSync(path.resolve(__dirname, "./assets/runcode.js"), { encoding: "utf8" });

hexo.extend.injector.register(
    "head_end", () => {
        return `<style type="text/css">${style}</style>`;
    }, "default"
);

hexo.extend.injector.register(
    "head_end",() => {
        return `<script type="text/javascript">${script}</script>`;
    }, "default"
);

function runcodeRender(args, content) {
  const id = "runcode_" + guid();
  return `<p><textarea class="runcode_text" id="${id}">` + content + `</textarea><input type="button" value="Run" class="runcode_button" onclick="runcode.open('${id}');" />&nbsp;<input type="button" value="Copy" class="runcode_button" onclick="runcode.copy('${id}');" /></p>`;
}

hexo.extend.tag.register("runcode", runcodeRender, {ends: true});



