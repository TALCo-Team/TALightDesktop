let PyodideExamples:Map<string,string> = new Map<string,string>();

PyodideExamples.set('input.py',
`# Esempio che mostra come utilizzare la funzione di input in ambiente asincrono
nome = await input("Ciao, come ti chiami?")
print(f'Ciao {nome}, posso farti una domanda ?')    

async def main():
  while(True):
    lati = await input("quanti lati ha un triangolo?")
    if lati=="3": break;
    print(f'No, mi dispiace non ha {lati} lati')    
  print('Congratulazioni!')

main()`
)

PyodideExamples.set('freesum.py',
`# Example: sum -> free sum
while True:
    line = await input()
    #print(f"# BOT: line={line}")
    if line[0] == '#':   # this is a commented line (sent by the service server)
        if '# WE HAVE FINISHED' == line:
            exit(0)   # exit upon termination of the service server
    else:
        n = int(line)
        print(f"{n} 0")`
)

PyodideExamples.set('sum.py',
`# Example: sfilde: somma, sovle
cnt = int(await input())
for i in range(cnt):
    line = await input()
    #print("line:", line)
    nums = line.split(" ")
    a = int(nums[0])
    b = int(nums[1])
    print(a+b)`   
)

let files = new Array<Array<string>>();
PyodideExamples.forEach((content:string, filename:string)=>{
  files.push([filename, content])
})

export { PyodideExamples } 